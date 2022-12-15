import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { ProductList } from "../../components/ProductList";
import { SearchContent } from "../../components/SearchContent";
import { api } from "../../services/api";
import { ContainerMain } from "../../styles/container";
import { StyledToastify } from "../../styles/toastify";
import { StyledDashboard } from "./style";

export function Dashboard() {
	const [product, setProduct] = useState([]);
	const [isOpen, setIsOpen] = useState(false)
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState([]);
	const [inputValue, setInputValue] = useState<string>("");
	const navigate = useNavigate()


	useEffect(() => {
		async function requestAPI() {
			const token = localStorage.getItem("@kenzieBurger:token")
			const request = await api.get("products", {
				headers: {
					Authorization: `Bearer ${token}`,
				},});
			try {
				const response = request.data;

				setProduct(response);
			} catch (error) {
				console.log(error);
				navigate("/login");
			}
		}
		requestAPI();
	}, [navigate]);

	

	return (
		<StyledDashboard>
			{isOpen && <Modal cart={cart} setCart={setCart} setIsOpen={setIsOpen}/>}
			<StyledToastify autoClose={3000}/>
			<Header
				cart={cart}
				filter={filter}
				setFilter={setFilter}
				product={product}
				setInputValue={setInputValue}
				inputValue={inputValue}
				setIsOpen={setIsOpen}
			></Header>
			<ContainerMain>
				<section className="sectionProducts">
					{inputValue?.trim().length !== 0 && (
						<SearchContent
							setFilter={setFilter}
							product={product}
							inputValue={inputValue}
							setInputValue={setInputValue}
						/>
					)}
					<ProductList
						product={product}
						filter={filter}
						setCart={setCart}
						cart={cart}	
					/>
				</section>
			</ContainerMain>
		</StyledDashboard>
	);
}
