import * as yup from "yup";

export const registerSchema = yup.object().shape({
	name: yup
		.string()
		.required("O campo 'nome' é obrigatório.")
		.min(3, "Nome precisa ter pelo menos 3 caracteres.")
		.max(150, "Nome não pode ter mais 150 caracteres."),
	email: yup
		.string()
		.required("O campo 'e-mail' é obrigatório.")
		.email("Preencha um e-mail válido."),
	password: yup
		.string()
		.required("O campo 'senha' é obrigatório.")
		.matches(/^.{6,}$/, "A senha precisa ter pelo menos 6 caracteres"),
	samePassword: yup
		.string()
		.required("O campo 'confirmar senha' é obrigatório.")
		.matches(/^.{6,}$/, "A senha precisa ter pelo menos 6 caracteres")
		.oneOf([yup.ref("password")], "As senhas devem ser iguais."),
	bio: yup.string(),
	contact: yup.string(),
	course_module: yup.string().required("O campo 'Módulo' é obrigatório."),
});
