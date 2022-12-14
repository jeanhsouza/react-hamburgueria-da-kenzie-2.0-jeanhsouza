import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: var(--gray400);

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		.logoHeader {
			width: 158px;
			height: 36px;
		}

		> nav {
			display: flex;
			gap: 16px;

			>img{
				cursor: pointer;
			}
		}
	}

	@media (min-width: 900px) {
		padding-top: 12px;
		padding-bottom: 12px;

		.searchIcon{
			display: none;
		}

		div:nth-child(1) {
			display: flex;
			justify-content: space-between;
		}

		
	}
`;
