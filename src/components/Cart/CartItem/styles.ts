import styled from "styled-components";

export const StyledCartProduct = styled.li`
	width: 100%;
	height: 80px;
	display: flex;
	gap: 10px;

	img {
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
	}

	.textProduct button {
		font-weight: 500;
		font-size: 14px;
		line-height: 15px;
		color: var(--gray200);
		background-color: transparent;
	}

	.textProduct button:hover {
		color: var(--gray100);
		text-decoration: underline;
	}

	.textContent {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.textContent h3 {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: var(--gray100);
	}

	.textContent span {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: var(--gray200);
	}
`;
