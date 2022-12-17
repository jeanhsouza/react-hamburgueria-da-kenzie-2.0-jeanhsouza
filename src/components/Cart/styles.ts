import styled from "styled-components";

export const CartBox = styled.div`
	width: 100%;
	height: 100vh;
	max-height: 100%;
	display: flex;
	flex-direction: column;

	.cartHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 10px;
		height: 65px;
		background-color: var(--brand100);
		> h2 {
			font-weight: 700;
			font-size: 18px;
			line-height: 24px;
			color: var(--gray400);
		}

		> button {
			background-color: transparent;
			color: var(--white100);
		}
	}

	.Cart {
		padding: 20px 10px;
		height: 100%;
		background-color: var(--gray400);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow: auto;
	}

	.emptyCart {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		> h2 {
			font-weight: 700;
			font-size: 18px;
			line-height: 24px;
			color: var(--gray100);
		}

		> span {
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: var(--gray200);
		}
	}

	@media (min-width: 900px) {
		margin-left: 0px;
		width: 365px;
	}
`;
