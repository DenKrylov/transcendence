import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
}

export const BodyWrapper = styled.section<Props>`
  background: ${({theme}) => theme.backgroundAlternate};
  width: 100%;
  height: 100%;
`