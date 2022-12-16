import { useContext } from "react";
import { StyledCartProduct } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import trashIcon from "../../../assets/img/trashIcon.svg";
import { DashContext } from "../../../context/DashContext";

export function CartProduct({ elem }) {
	const { removeCart, removeItem, addItem } = useContext(DashContext);
	
	return (
		<StyledCartProduct>
			<img src={elem.img} alt="" />
			<div className="textProduct">
				<div className="textContent">
					<h3>{elem.name}</h3>
					<div className="counterCartItem">
						<button onClick={()=>removeItem(elem)}>-</button>
						<span>{elem.count}</span>
						<button onClick={()=>addItem(elem)}>+</button>
					</div>
				</div>
				<img src={trashIcon} alt="trashIcon" onClick={()=>removeCart(elem)} />
			</div>
		</StyledCartProduct>
	);
}
