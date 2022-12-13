import logo from "../../assets/img/logo.svg";
import shoppingBag from "../../assets/img/shopping-bag.svg";
import dots from "../../assets/img/dots.svg";
import { StyledAcessSection, StyledCoverSection, StyledLogin } from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { useNavigate} from "react-router-dom";

export function Login() {
	const navigate = useNavigate()

	function RegisterLink(){
		navigate("/register")
	}

	return (
		<StyledLogin>
			<StyledCoverSection>
				<img src={logo} alt="" />
				<div className="bagBox">
					<img src={shoppingBag} alt="" />
					<p>
						A vida é como um sanduíche, é preciso recheá-la com os{" "}
						<strong>melhores</strong> ingredientes.
					</p>
				</div>
				<img src={dots} alt="" className="dots" />
			</StyledCoverSection>
			<StyledAcessSection>
				<h2>Login</h2>
				<Form
					submit={() => {
						console.log("oi");
					}}
				>
					<Input label="Nome" id="name" type="text" />
					<Input label="Senha" id="password" type="password" />
					<Button
						type="submit"
						click={() => {
							console.log("oi");
						}}
						buttonSize="medium"
						buttonStyle="brand1"
					>
						Logar
					</Button>
				</Form>
				<span>
					Crie sua conta para saborear muitas delícias e matar sua fome!
				</span>
				<Button
						type="button"
						click={RegisterLink}
						buttonSize="medium"
						buttonStyle="solid1"
					>
						Cadastrar
					</Button>
				
			</StyledAcessSection>
		</StyledLogin>
	);
}
