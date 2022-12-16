import { Button } from "../Button";
import { StyledInputSearch } from "./styles";
import searchIcon2 from "../../assets/img/searchIcon2.svg";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";

export function InputSearch({ display }) {
	const { filterProduct, inputValue } = useContext(DashContext);

	return (
		<StyledInputSearch display={display} onSubmit={filterProduct}>
			<input
				defaultValue={inputValue}
				id="input"
				type="text"
				placeholder="Digitar Pesquisa..."
			/>
			<Button buttonSize="default" buttonStyle="brand1">
				<img src={searchIcon2} alt="searchIcon2" />
			</Button>
		</StyledInputSearch>
	);
}
