import styled from "styled-components";

export const StyledCartProduct = styled.li`
	width: 100%;
	height: 80px;
	display: flex;
	gap: 10px;

	> img {
		background-color: var(--gray300);
		border-radius: 8px;
		width: 80px;
		height: 80px;
	}

	.textProduct {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 80%;

		> img {
			cursor: pointer;
		}
	}

	.textProduct > button {
		font-weight: 500;
		font-size: 14px;
		line-height: 15px;
		color: var(--gray200);
		background-color: transparent;
	}

	.textProduct > button:hover {
		color: var(--gray100);
		text-decoration: underline;
	}

	.textContent {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.textContent > h3 {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: var(--gray100);
	}

	.textContent > span {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: var(--gray200);
	}

	.counterCartItem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1px;
		background-color: var(--gray300);
		width: 120px;

		> button {
			color: var(--negative100);
			font-size: 22px;
			background-color: transparent;
			padding: 0px 10px;
		}

		> span {
			background-color: var(--white100);
			padding: 5px 20px;
			font-weight: var(--font-weight-3);
			font-size: var(--font-size-4);
		}
	}
`;
