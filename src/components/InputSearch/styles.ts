import styled from "styled-components";

export const StyledInputSearch = styled.form`
	:hover {
		border: 2px solid var(--gray100);
	}
	position: relative;
	height: 60px;
	background: var(--white100);
	border: 2px solid var(--gray300);
	border-radius: 8px;
	padding: 0px 10px 0px 15px;
	display: none;
	align-items: center;

	input {
		outline: none;
		font-size: 16px;
	}

	button {		
		height: 40px;
	}

	@media (min-width: 900px) {
		display: flex;
		width: 90%;

		input {
			width: 60%;
		}

		button {
			position: relative;
			right: -50px;
			width: 53px;
			padding: 0px;

			>img{
			}
		}
	}
`;
