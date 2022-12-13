import { StyledInput } from "./style";

interface iInput {
    label:string;
    id:string;
    type:string;
}

export function Input({label, id, type}:iInput) {
	return (
		<StyledInput>
			<input type={type} id={id} placeholder=" "/>
			<label>{label}</label>
		</StyledInput>
	);
}
