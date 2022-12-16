import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { Product } from "./ProductItem";
import { StyledUl } from "./styles";

export function ProductList() {
	const { product, filter } = useContext(DashContext);

	return (
		<StyledUl>
			{filter.length !== 0
				? filter.map((elem) => {
						return <Product key={elem.id} elem={elem}></Product>;
				  })
				: product.map((elem) => {
						return <Product key={elem.id} elem={elem}></Product>;
				  })}
		</StyledUl>
	);
}
