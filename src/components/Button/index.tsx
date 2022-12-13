import { StyledButton } from "./style";

type tButtonType = "button" | "submit" | "reset" | undefined;

interface iButtonProps {
    children: React.ReactNode;
    click: () => void;
    type: tButtonType;
	buttonSize: string;
	buttonStyle: string;

}

export function Button({ children, click, type, buttonStyle, buttonSize}: iButtonProps) {
	return (
		<StyledButton type={type} onClick={click} buttonSize={buttonSize} buttonStyle={buttonStyle}>
			{children}
		</StyledButton>
	);
}