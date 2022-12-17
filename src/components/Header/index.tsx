import logo from "../../assets/img/logo.svg";
import logout from "../../assets/img/logout.svg";
import cartIcon from "../../assets/img/cartIcon.svg";
import searchIcon from "../../assets/img/searchIcon.svg";
import { Container } from "../../styles/container";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { AuthContext } from "../../context/AuthContext";

export function Header() {
	const {
		openModal,
		counterCart,
		inputModal,
		openInputModal,
		closeInputModal,
	} = useContext(DashContext);
	const { Logout } = useContext(AuthContext);

	return (
		<StyledHeader>
			<Container>
				{inputModal ? (
					<>
						<InputSearch display="flex" />
						<button onClick={closeInputModal} className="exitInputModal">
							X
						</button>
					</>
				) : (
					<>
						<img src={logo} alt="" className="logoHeader" />
						<nav>
							<InputSearch display="none" />
							<img
								onClick={openInputModal}
								src={searchIcon}
								alt=""
								className="searchIcon"
							/>
							<div onClick={openModal} className="cartIconBox">
								<img src={cartIcon} alt="" className="cartIcon" />
								<span>{counterCart}</span>
							</div>
							<img onClick={Logout} src={logout} alt="" className="logout" />
						</nav>
					</>
				)}
			</Container>
		</StyledHeader>
	);
}
