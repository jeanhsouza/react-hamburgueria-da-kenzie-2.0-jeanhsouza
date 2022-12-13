import logo from "../../assets/img/logo.svg"
import shoppingBag from "../../assets/img/shopping-bag.svg"
import dots from "../../assets/img/dots.svg";
import { StyledAcessSection, StyledCoverSection, StyledRegister } from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Register() {
	return <StyledRegister>
		<StyledCoverSection>
			<img src={logo} alt="" />
			<div className="bagBox">
				<img src={shoppingBag} alt=""/>
				<p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
			</div>
			<img src={dots} alt="" className="dots"/>
		</StyledCoverSection>
		<StyledAcessSection>
			<div className="headerAcess">
				<h2>Cadastro</h2>
				<Link to="/login">Retornar para o login</Link>
			</div>
			<Form submit={()=>{console.log("oi")}}>
				<Input label="Nome" id="name" type="text"/>
				<Input label="Email" id="email" type="email"/>
				<Input label="Senha" id="password" type="password"/>
				<Input label="Confirmar Senha" id="validatePassword" type="password"/>
				<Button type="submit" click={()=>{console.log("oi")}} buttonSize="medium"
					buttonStyle="solid1">Cadastrar</Button>
			</Form>
		</StyledAcessSection>
	</StyledRegister>;
}
