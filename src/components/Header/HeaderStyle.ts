import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
	location?: string;
}

export const HeaderWrapper = styled.header<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	background: ${({theme}) => theme.backgroundNormal};
`

export const HeaderLogo = styled.h1<Props>`
	color: ${({theme}) => theme.foregroundNormal};
`

export const HeaderControl = styled.div`
	display: flex;
`;

export const HeaderLink = styled.a<Props>`
	color: ${({theme}) => theme.foregroundNormal};
`;

export const HeaderButton = styled.p<Props>`
	margin-left: 1rem;
	font-size: 1.5rem;
	color: ${({theme}) => theme.foregroundPositive};
	cursor: pointer;
	:hover {
		color: ${({theme}) => theme.foregroundLink};
	}
`;

export const HeaderUser = styled.div`

`;