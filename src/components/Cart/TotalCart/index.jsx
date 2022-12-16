import {useContext} from "react";
import { Button } from "../../Button";
import { StyledTotalCart } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { DashContext } from "../../../context/DashContext";

export function TotalCart() {
	const {cart, removeAll} = useContext(DashContext)

	const totalValue = cart.reduce((acc, actualValue) => {
		return acc + (Number(actualValue.price) * actualValue.count);
	}, 0);
	

	return (
		<StyledTotalCart>
			<div className="TextValue">
				<h3>Total</h3>
				<span>
					{totalValue.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
			</div>
			<Button click={removeAll}>Remover todos</Button>
		</StyledTotalCart>
	);
}
