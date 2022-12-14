import logo from "../../assets/img/logo.svg"
import shoppingBag from "../../assets/img/shopping-bag.svg"
import dots from "../../assets/img/dots.svg";
import { StyledAcessSection, StyledCoverSection, StyledRegister } from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { api } from "../../services/api";

interface iRegisterFormData {
	name: string;
	email: string;
	password: string;
	samePassword?: string;
}

export function Register() {

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iRegisterFormData>({ mode: "onBlur",resolver: yupResolver(registerSchema) });

	const submitRegister: SubmitHandler<iRegisterFormData> = async (data) => {
		delete data.samePassword;
		registerUser(data)
		console.log(data);
	};

	async function registerUser(data: iRegisterFormData) {
		try {
			const request = await api.post("users", data);
			if(request){
				navigate("/login")
			}

		} catch (error) {
			console.log(error);
		}
	}
	
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
			<Form submit={handleSubmit(submitRegister)}>
				<Input label="Nome" id="name" type="text" register={register("name")}/>
				{errors.name?.message && <span>{errors.name.message}</span>}
				<Input label="Email" id="email" type="email" register={register("email")}/>
				{errors.email?.message && <span>{errors.email.message}</span>}
				<Input label="Senha" id="password" type="password" register={register("password")}/>
				{errors.password?.message && <span>{errors.password.message}</span>}
				<Input label="Confirmar Senha" id="samePassword" type="password" register={register("samePassword")}/>
				{errors.samePassword?.message && <span>{errors.samePassword.message}</span>}
				<Button type="submit" buttonSize="medium"
					buttonStyle="solid1">Cadastrar</Button>
			</Form>
		</StyledAcessSection>
	</StyledRegister>;
}
