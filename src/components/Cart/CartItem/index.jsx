import { StyledCartProduct } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CartProduct({ elem, cart, setCart }) {
	function removeCart() {
		const cardFilter = cart.filter((item) => {
			return item !== elem;
		});

		toast.success("Produto removido do carrinho", {
			position: toast.POSITION.TOP_CENTER,
		});

		setCart(cardFilter);
	}

	return (
		<StyledCartProduct>
			<ToastContainer />
			<img src={elem.img} alt="" />
			<div className="textProduct">
				<div className="textContent">
					<h3>{elem.name}</h3>
					<span>{elem.category}</span>
				</div>
				<button onClick={removeCart}>Remover</button>
			</div>
		</StyledCartProduct>
	);
}
