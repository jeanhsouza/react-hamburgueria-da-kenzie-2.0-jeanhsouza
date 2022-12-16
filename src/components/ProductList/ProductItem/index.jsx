import { useContext } from "react";
import { Button } from "../../Button";
import { StyledLi } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { DashContext } from "../../../context/DashContext";

export function Product({ elem }) {
	const { addCart } = useContext(DashContext);
	
	return (
		<StyledLi>
			<div className="imgBox">
				<img src={elem.img} alt="" />
			</div>
			<div className="textProduct">
				<h3>{elem.name}</h3>
				<p>{elem.category}</p>
				<span>
					{elem.price.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<Button buttonSize="medium" buttonStyle="solid2" click={()=>addCart(elem)}>
					Adicionar
				</Button>
			</div>
		</StyledLi>
	);
}
