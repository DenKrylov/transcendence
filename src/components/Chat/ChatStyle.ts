import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
}

export const ChatWrapper = styled.article`
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100%;
`;

export const ChatLists = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-right: 3px solid ${({theme}) => theme.backgroundNormal};;
`;

export const ChatList = styled.div<Props>`
  display: grid;
  grid-template-columns: 7rem 100%;
  height: 5rem;
  border-radius: .3rem;
  background: ${({theme}) => theme.backgroundNormal};
  margin: .1rem;
  padding: 1rem;
  cursor: pointer;
`;

export const ChartListAva = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: black;
`;

export const ChartListInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
`;

export const ChatDialog = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dialog = styled.div`
  position: relative;
  display: flex;
`

export const DialogAvatarka = styled.div`
  background: black;
  border-radius: 100%;
`;

export const DialogMessage = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.backgroundNormal};
`;

export const DialogUser = styled.div`

`;

export const DialogText = styled.div`

`;


export const ChatDialogInput = styled.div`
  position: absolute;
  bottom: 0;
`;