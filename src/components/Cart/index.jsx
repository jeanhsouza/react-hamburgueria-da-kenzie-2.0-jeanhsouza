import { CartProduct } from "./CartItem";
import { TotalCart } from "./TotalCart";
import { CartBox } from "./styles";

export function Cart({ cart, setCart, setIsOpen }) {

		
	return (
		<CartBox>
			<div className="cartHeader">
				<h2>Carrinho de compras</h2>
				<button onClick={()=> setIsOpen(false)}>X</button>
			</div>
			<ul className="Cart">
				{cart.length === 0 && (
					<div className="emptyCart">
						<h2>Sua sacola está vazia</h2>
						<span>Adicione itens</span>
					</div>
				)}
				{cart.map((elem) => {
					return (
						<CartProduct
							key={elem.id}
							elem={elem}
							cart={cart}
							setCart={setCart}
						/>
					);
				})}
			</ul>
			{cart.length !== 0 && <TotalCart cart={cart} setCart={setCart} />}
		</CartBox>
	);
}
