import logo from "../../assets/img/logo.svg";
import shoppingBag from "../../assets/img/shopping-bag.svg";
import dots from "../../assets/img/dots.svg";
import { StyledAcessSection, StyledCoverSection, StyledLogin } from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { api } from "../../services/api";

interface iLoginFormData {
	email: string;
	password: string;
}

export function Login() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iLoginFormData>({
		mode: "onBlur",
		resolver: yupResolver(loginSchema),
	});

	function RegisterLink() {
		navigate("/register");
	}

	const submitLogin: SubmitHandler<iLoginFormData> = async (data) => {
		loginUser(data);
		console.log(data);
	};

	async function loginUser(data: iLoginFormData) {
		try {
			const request = await api.post("login", data);
			const response = await request.data;

			const { accessToken, user } = response;

			localStorage.setItem("@kenzieBurger:token", accessToken);
			localStorage.setItem("@kenzieBurger:userID", JSON.stringify(user));
			navigate("/dashboard")

		} catch (error) {
			console.log(error);
		}
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
				<Form submit={handleSubmit(submitLogin)}>
					<Input
						label="Email"
						id="email"
						type="text"
						register={register("email")}
					/>
					{errors.email?.message && <span>{errors.email.message}</span>}
					<Input
						label="Senha"
						id="password"
						type="password"
						register={register("password")}
					/>
					{errors.password?.message && <span>{errors.password.message}</span>}
					<Button type="submit" buttonSize="medium" buttonStyle="brand1">
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
