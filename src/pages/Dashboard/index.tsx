import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { SearchContent } from "../../components/SearchContent";
import { api } from "../../services/api";
import { ContainerMain } from "../../styles/container";
import { StyledDashboard } from "./style";

export function Dashboard() {
	const [product, setProduct] = useState([]);
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState([]);
	const [inputValue, setInputValue] = useState<string>("");

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
			}
		}
		requestAPI();
	}, []);

	return (
		<StyledDashboard>
			<Header
				filter={filter}
				setFilter={setFilter}
				product={product}
				setInputValue={setInputValue}
				inputValue={inputValue}
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
