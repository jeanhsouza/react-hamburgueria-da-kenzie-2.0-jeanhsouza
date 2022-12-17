import styled from "styled-components";

export const StyledTotalCart = styled.div`
	border-top: 2px solid var(--gray300);
	background-color: var(--gray400);
	display: flex;
	flex-direction: column;
	padding: 10px;
	gap: 22px;

	.TextValue {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.TextValue h3 {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: var(--gray100);
	}

	.TextValue span {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: var(--gray200);
	}
`;
