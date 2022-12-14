import { Product } from "./ProductItem";
import { StyledUl } from "./styles";

export function ProductList({ product, filter, cart, setCart }) {
	return (
		<StyledUl>
			{filter.length !== 0
				? filter.map((elem) => {
						return (
							<Product
								key={elem.id}
								product={elem}
								setCart={setCart}
								cart={cart}
							></Product>
						);
				  })
				: product.map((elem) => {
						return (
							<Product
								key={elem.id}
								product={elem}
								setCart={setCart}
								cart={cart}
							></Product>
						);
				  })}
		</StyledUl>
	);
}
