import logo from "../../assets/img/logo.svg";
import logout from "../../assets/img/logout.svg";
import cartIcon from "../../assets/img/cartIcon.svg";
import searchIcon from "../../assets/img/searchIcon.svg";
import { Container } from "../../styles/container";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header({
	cart,
	filter,
	setFilter,
	product,
	inputValue,
	setInputValue,
	setIsOpen,
}) {
	const navigate = useNavigate();
	const [counterCart, setcounterCart] = useState(0);
	const [inputModal, setInputModal] = useState(false);
	const [screen, setscreen] = useState(900)
	function Logout() {
		localStorage.clear();
		navigate("/login");
	}

	useEffect(() => {
		setcounterCart(cart.length);

		if (cart.length > 0) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [cart, setIsOpen]);

	useEffect(()=>{
		window.addEventListener("resize",()=>{
			setscreen(window.innerWidth);			
		})

		if(screen >=900){
			setInputModal(false)
		}
		
	},[screen])

	return (
		<StyledHeader>
			<Container>
				{inputModal ? 
				<>
				<InputSearch
					filter={filter}
					setFilter={setFilter}
					product={product}
					inputValue={inputValue}
					setInputValue={setInputValue}
					display="flex"
				/>
				<button onClick={()=>setInputModal(false)}className="exitInputModal">X</button>
				</> :
				<>
				<img src={logo} alt="" className="logoHeader" />
				<nav>
					<InputSearch
						filter={filter}
						setFilter={setFilter}
						product={product}
						inputValue={inputValue}
						setInputValue={setInputValue}
						display="none"
					/>
					<img onClick={()=> setInputModal(true)}src={searchIcon} alt="" className="searchIcon" />
					<div onClick={() => setIsOpen(true)} className="cartIconBox">
						<img src={cartIcon} alt="" className="cartIcon" />
						<span>{counterCart}</span>
					</div>
					<img onClick={Logout} src={logout} alt="" className="logout" />
				</nav></>
				}
				
				
			</Container>
		</StyledHeader>
	);
}
