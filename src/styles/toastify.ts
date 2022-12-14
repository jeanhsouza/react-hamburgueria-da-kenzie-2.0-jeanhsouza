import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastify = styled(ToastContainer)`
	&&&.Toastify__toast-container {
		width: fit-content;
	}

	.Toastify__toast {
		background-color: var(--gray200);
		color: var(--gray500);
	}
`;
