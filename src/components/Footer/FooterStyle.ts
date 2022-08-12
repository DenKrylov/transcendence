import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
}

export const FooterWrapper = styled.footer<Props>`
	background: ${({theme}) => theme.backgroundNormal};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
`;

export const FooterLogo = styled.p<Props>`
	color: ${({theme}) => theme.foregroundNormal};
`;

export const FooterControl = styled.img`
`;