import { Button } from "../../Button";
import { StyledTotalCart } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function TotalCart({ cart, setCart }) {
	const totalValue = cart.reduce((acc, actualValue) => {
		return acc + (Number(actualValue.price) * actualValue.count);
	}, 0);

	function removeAll() {
		toast.success("Carrinho limpo com sucesso!", {
			position: toast.POSITION.TOP_CENTER,
		});
		setCart([]);
	}

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
