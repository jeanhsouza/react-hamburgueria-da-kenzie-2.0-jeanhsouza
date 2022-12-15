import { Button } from "../../Button";
import { StyledLi } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Product({ product, cart, setCart }) {
	
	function addCart() {
		const cartContains = cart.find((elem) => {
			return elem.id === product.id;
		});

		if (cartContains) {
			const updatedCart = cart.map((elem) =>
				elem.id === product.id ? { ...elem, count: elem.count + 1 } : elem
			);
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart(updatedCart);
		} else {
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart((oldCart) => [...oldCart, { ...product, count: 1 }]);
		}
	}

	return (
		<StyledLi>
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
				<Button buttonSize="medium" buttonStyle="solid2" click={addCart}>
					Adicionar
				</Button>
			</div>
		</StyledLi>
	);
}
