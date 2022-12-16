import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const DashContext = createContext();

export function DashProvider({ children }) {
	const [product, setProduct] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [counterCart, setcounterCart] = useState(0);
	const [inputModal, setInputModal] = useState(false);
	const [screen, setscreen] = useState(900);
	const navigate = useNavigate();

	useEffect(() => {
		async function requestAPI() {
			const token = localStorage.getItem("@kenzieBurger:token");
			const request = await api.get("products", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			try {
				const response = request.data;

				setProduct(response);
			} catch (error) {
				console.log(error);
				navigate("/login");
			}
		}
		requestAPI();
	}, [navigate]);

	useEffect(() => {
		setcounterCart(cart.length);

		if (cart.length > 0) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [cart, setIsOpen]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setscreen(window.innerWidth);
		});

		if (screen >= 900) {
			setInputModal(false);
		}
	}, [screen]);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function addCart(item) {
		const cartContains = cart.find((elem) => {
			return elem.id === item.id;
		});

		if (cartContains) {
			const updatedCart = cart.map((elem) =>
				elem.id === item.id ? { ...elem, count: elem.count + 1 } : elem
			);
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart(updatedCart);
		} else {
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart((oldCart) => [...oldCart, { ...item, count: 1 }]);
		}
	}

	function removeCart(elem) {
		const cardFilter = cart.filter((item) => {
			return item !== elem;
		});

		toast.success("Produto removido do carrinho", {
			position: toast.POSITION.TOP_CENTER,
		});

		setCart(cardFilter);
	}

	function removeItem(elem) {
		const product = cart.find((item) => item.id === elem.id);

		if (product.count <= 1) {
			const updatedCart = cart.filter((item) => item.id !== elem.id);

			setCart(updatedCart);
		} else {
			const updatedCart = cart.map((item) =>
				item.id === elem.id ? { ...item, count: item.count - 1 } : item
			);
			setCart(updatedCart);
		}
	}

	function addItem(elem) {
		const updatedCart = cart.map((item) =>
			item.id === elem.id ? { ...item, count: item.count + 1 } : item
		);
		setCart(updatedCart);
	}

	function removeAll() {
		toast.success("Carrinho limpo com sucesso!", {
			position: toast.POSITION.TOP_CENTER,
		});
		setCart([]);
	}

	function filterProduct(e) {
		e.preventDefault();
		const searchValue = e.target[0].value;
		setInputValue(searchValue);

		const filterItems = product.filter((elem) => {
			return (
				elem.name.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
				elem.category.toLowerCase().includes(searchValue.toLowerCase().trim())
			);
		});

		searchValue.length === 0 ? setFilter(product) : setFilter(filterItems);
	}

	function clearSearch() {
		const inputSearch = document.querySelector("#input");
		inputSearch.value = "";
		setInputValue("");
		setFilter(product);
	}	

	function openInputModal() {
		setInputModal(true);
	}

	function closeInputModal() {
		setInputModal(false);
	}

	return (
		<DashContext.Provider
			value={{
				product,
				isOpen,
				cart,
				filter,
				inputValue,
				counterCart,
				inputModal,
				screen,
				openModal,
				closeModal,
				addCart,
				removeCart,
				removeItem,
				addItem,
				removeAll,
				filterProduct,
				clearSearch,
				openInputModal,
				closeInputModal,
			}}
		>
			{children}
		</DashContext.Provider>
	);
}
