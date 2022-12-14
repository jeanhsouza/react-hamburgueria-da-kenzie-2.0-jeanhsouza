import { StyledInput } from "./style";

interface iInputProps {
    label:string;
    id:string;
    type:string;
	register?: any;
}

export function Input({label, id, type, register}:iInputProps) {
	return (
		<StyledInput>
			<input type={type} id={id} placeholder=" " {...register}/>
			<label>{label}</label>
		</StyledInput>
	);
}
