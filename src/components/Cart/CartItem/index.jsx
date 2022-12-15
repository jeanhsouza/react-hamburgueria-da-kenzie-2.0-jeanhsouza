import { StyledCartProduct } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import trashIcon from "../../../assets/img/trashIcon.svg"

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

	function removeItem(){
		const product = cart.find(item => item.id === elem.id)

		if(product.count <= 1){
			const updatedCart = cart.filter(item => item.id !== elem.id);

			setCart(updatedCart)
		}
		else{
			const updatedCart = cart.map(item => item.id === elem.id ? {...item, count: item.count - 1} : item)
			setCart(updatedCart)
		}

	}

	function addItem(){
		const updatedCart = cart.map(item => item.id === elem.id ? {...item, count: item.count + 1} : item)
		setCart(updatedCart)
	}

	return (
		<StyledCartProduct>
			<img src={elem.img} alt="" />
			<div className="textProduct">
				<div className="textContent">
					<h3>{elem.name}</h3>
					{/* <span>{elem.category}</span> */}
					<div className="counterCartItem">
						<button onClick={removeItem}>-</button>
						<span>{elem.count}</span>
						<button onClick={addItem}>+</button>
					</div>
				</div>
				<img src={trashIcon} alt="trashIcon" onClick={removeCart} />
			</div>
		</StyledCartProduct>
	);
}
