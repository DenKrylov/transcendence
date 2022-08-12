import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
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
`