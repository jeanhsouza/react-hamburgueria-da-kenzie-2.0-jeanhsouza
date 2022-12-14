import logo from "../../assets/img/logo.svg"
import logout from "../../assets/img/logout.svg"
import cartIcon from "../../assets/img/cartIcon.svg"
import searchIcon from "../../assets/img/searchIcon.svg"
import { Container } from "../../styles/container";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";

export function Header({
	filter,
	setFilter,
	product,
	inputValue,
	setInputValue,
}) {
	return (
		<StyledHeader>
			<Container>
				<img src={logo} alt="" className="logoHeader" />
				<nav>
				<InputSearch
					filter={filter}
					setFilter={setFilter}
					product={product}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
				<img src={searchIcon} alt="" className="searchIcon" />
				<img src={cartIcon} alt="" className="cartIcon" />
				<img src={logout} alt="" className="logout" />
				</nav>
			</Container>
		</StyledHeader>
	);
}
