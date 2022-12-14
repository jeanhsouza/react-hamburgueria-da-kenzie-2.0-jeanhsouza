import styled from "styled-components";

export const CartBox = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	margin-left: 40px;
	width: 365px;
	height: fit-content;
	display: flex;
	flex-direction: column;

	.cartHeader {
		display: flex;
		align-items: center;
		padding: 20px;
		height: 65px;
		background-color: var(--brand100);
		border-radius: 8px 8px 0px 0px;

		> h2 {
			font-weight: 700;
			font-size: 18px;
			line-height: 24px;
			color: var(--gray400);
		}
	}

	.Cart {
		padding: 20px 10px;
		background-color: var(--gray400);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-height: 300px;
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

	@media (max-width: 900px) {
		margin-left: 0px;
		width: 100%;
	}
`;
