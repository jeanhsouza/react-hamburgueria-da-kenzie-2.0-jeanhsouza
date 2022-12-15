import { Cart } from "../Cart";
import { StyledModal } from "./style";

export function Modal({cart, setCart, setIsOpen}) {

	return (
		<StyledModal>
			<Cart cart={cart} setCart={setCart} setIsOpen={setIsOpen}/>
		</StyledModal>
	);
}
