import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
  width?: number;
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
  grid-template-columns: 4rem 1fr;
  height: 4rem;
  border-radius: .3rem;
  background: ${({theme}) => theme.backgroundNormal};
  margin: .1rem;
  padding: 1rem;
  cursor: pointer;
`;

export const ChartListFoto = styled.div`
  border-radius: 100%;
  background: black;
`;

export const ChatListName = styled.p<Props>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.foregroundLink};
`;

export const ChatListLastMesseage = styled.p<Props>`
  font-size: 1rem;
  color: ${({theme}) => theme.foregroundNormal};
  width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChartListInfo = styled.div`
  margin-left: 1rem;
`;

export const ChatDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
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

export const ChatDialogInput = styled.div<Props>`
  display: flex;
	flex-direction: row;
	height: 5rem;
	align-items: center;
	border-top: 1px solid ${({theme}) => theme.backgroundNormal};
	border-radius: .3rem;
  background: ${({theme}) => theme.backgroundNormal};
`;

export const ChatDialogInputForm = styled.form`
`;

export const ChatDialogInputEnter = styled.input<Props>`
  display: flex;
	height: 3rem;
	width: 50vw;
	margin: .5rem 0 .5rem 1rem;
	padding: 0 0 0 .5rem;
	box-sizing: border-box;
	border-radius: .3rem 0 0 .3rem;
	font-size: 1.5rem;
	outline: none;
  background: ${({theme}) => theme.backgroundNormal};
	border: 1px solid ${({theme}) => theme.backgroundAlternate};
  color: ${({theme}) => theme.foregroundNormal};
`;

export const ChatDialogInputSend = styled.input`
  display: flex;
  justify-content: center;
	height: 3rem;
	width: 7rem;
	margin: .5rem 1rem .5rem 0;
	box-sizing: border-box;
	border-radius: 0 .3rem .3rem 0;
	cursor: pointer;
  border: 1px solid  ${({theme}) => theme.backgroundAlternate};
  background: ${({theme}) => theme.backgroundNormal};
	color: ${({theme}) => theme.decorationFocus};
`;