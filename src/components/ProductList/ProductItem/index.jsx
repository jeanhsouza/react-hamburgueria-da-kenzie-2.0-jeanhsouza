import { Button } from "../../Button";
import { StyledLi } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Product({ product, cart, setCart }) {
	function addCart() {
		const cartContains = cart.find((elem) => {
			return elem === product;
		});

		cartContains !== product
			? setCart((oldCart) => [...oldCart, product]) ||
			  toast.success("Produto adicionado ao carrinho!", {
					position: toast.POSITION.TOP_LEFT,
			  })
			: toast.error("Esse produto já foi adicionado ao carrinho!", {
					position: toast.POSITION.TOP_LEFT,
			  });
	}

	return (
		<StyledLi>
			<ToastContainer />
			<div className="imgBox">
				<img src={product.img} alt="" />
			</div>
			<div className="textProduct">
				<h3>{product.name}</h3>
				<p>{product.category}</p>
				<span>
					{product.price.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<Button buttonSize="medium" buttonStyle="solid2" click={addCart}>Adicionar</Button>
			</div>
		</StyledLi>
	);
}
