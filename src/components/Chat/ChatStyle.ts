import styled from "styled-components";

import { Theme } from "../../indexStyle";

interface Props {
	theme?: Theme;
  width?: number;
  heightDialogs?: number;
  who?: boolean;
  vieweScroll?: boolean;
  active?: boolean;
}

const leta = 'rgba(0, 0, 0, .7)';

export const ChatWrapper = styled.article`
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100%;
`;

export const ChatLists = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-right: 3px solid ${({theme}) => theme.backgroundNormal};
`;

export const ChatList = styled.div<Props>`
  display: grid;
  grid-template-columns: 4rem 1fr;
  height: 4rem;
  border-radius: .3rem;
  background: ${({theme, active}) => active ? 'rgba(0, 0, 0, .1)' : theme.backgroundNormal};
  margin: .1rem;
  padding: 1rem;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, .1);
  }
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
  padding-left: 20vw;
  padding-right: 20vw;
`;

export const Dialogs = styled.div<Props>`
  height: ${({heightDialogs}) => heightDialogs}rem;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${({theme}) => theme.backgroundAlternate};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({theme, vieweScroll}) => vieweScroll ? theme.backgroundNormal : theme.backgroundAlternate};
    cursor: pointer;
  }
`;

export const Dialog = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: ${({who}) => who ? 'flex-end' : 'flex-start'};
  margin: .3rem;
`

export const DialogFoto = styled.div`
  background: black;
  border-radius: 100%;
  margin-left: .3rem;
  margin-right: .3rem;
  height: 3rem;
  width: 3rem;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

export const DialogMessage = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.backgroundNormal};
  border-radius: ${({who}) => who ? '.3rem .3rem 0 .3rem' : '.3rem .3rem .3rem 0'};
  padding: .3rem;
`;

export const DialogUser = styled.div<Props>`
  color: ${({who, theme}) => who ? theme.foregroundLink : theme.foregroundPositive};
`;

export const DialogText = styled.div`
  color:  ${({theme}) => theme.foregroundNormal};
`;

export const ChatDialogInput = styled.div<Props>`
  display: grid;
  grid-template-columns: 15fr 1fr;
  width: 100%;
	height: 5rem;
	align-items: center;
	border-top: 1px solid ${({theme}) => theme.backgroundNormal};
	border-radius: .3rem;
  background: ${({theme}) => theme.backgroundNormal};
`;

export const ChatDialogInputForm = styled.form`
  width: 100%;
`;

export const ChatDialogInputEnter = styled.input<Props>`
	height: 3rem;
  width: 100%;
	margin: .3rem 0 .3rem 1rem;
	padding: 0 .3rem 0 .3rem;
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
  font-size: 1.5rem;
  font-weight: 700;
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