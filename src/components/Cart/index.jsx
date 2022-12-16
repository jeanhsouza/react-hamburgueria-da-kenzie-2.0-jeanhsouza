import { CartProduct } from "./CartItem";
import { TotalCart } from "./TotalCart";
import { CartBox } from "./styles";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";

export function Cart() {
	const { closeModal, cart } = useContext(DashContext);

	return (
		<CartBox>
			<div className="cartHeader">
				<h2>Carrinho de compras</h2>
				<button onClick={closeModal}>X</button>
			</div>
			<ul className="Cart">
				{cart.length === 0 && (
					<div className="emptyCart">
						<h2>Sua sacola está vazia</h2>
						<span>Adicione itens</span>
					</div>
				)}
				{cart.map((elem) => {
					return <CartProduct key={elem.id} elem={elem} />;
				})}
			</ul>
			{cart.length !== 0 && <TotalCart />}
		</CartBox>
	);
}
