import { useState } from "react";
import { useRecoilValue } from "recoil";

import { chatListsState } from "../../recoil/ChatLists/ChatLists";
import { getThemeState } from "../../recoil/Theme/getTheme";
import { userState } from "../../recoil/User/User";

import { ChatDialog, ChatList, ChatLists, ChartListFoto, ChatWrapper, Dialog, DialogFoto, DialogUser, DialogText, DialogMessage, ChatDialogInput, ChatListName, ChatListLastMesseage, ChartListInfo, ChatDialogInputForm, ChatDialogInputEnter, ChatDialogInputSend, Dialogs } from "./ChatStyle";

interface typeList {
  name: string,
  id: number,
  dialog: typeDialog[],
}

interface typeDialog {
  id: string,
  avatarka: string,
  user: string,
  text: string,
}

export const Chat = () => {

  const theme = useRecoilValue(getThemeState);
  const listChat = useRecoilValue(chatListsState);
  const user = useRecoilValue(userState);

  const heightDialogs = ((window.outerHeight - (16 * 21)) / 16);
  const [ vieweScroll, setVieweScroll] = useState(false);

  const [ activeChat, setActiveChat ] = useState(-1);

  return (
    <ChatWrapper>
      <ChatLists theme={theme}>
        { listChat.map((item: typeList, index: number) => (
          <ChatList key={item.id} theme={theme} active={index === activeChat} onClick={() => setActiveChat(index)}>
            <ChartListFoto></ChartListFoto>
            <ChartListInfo>
              <ChatListName theme={theme}>{item.name}</ChatListName>
              <ChatListLastMesseage theme={theme}>{item.dialog[0].text}</ChatListLastMesseage>
            </ChartListInfo>
          </ChatList>
        ))}
      </ChatLists>
      { activeChat >= 0 &&
        <ChatDialog>
          <Dialogs heightDialogs={heightDialogs} vieweScroll={vieweScroll} theme={theme} onMouseEnter={() => setVieweScroll(true)} onMouseLeave={() => setVieweScroll(false)}>
            { listChat[activeChat].dialog.map((dialog: typeDialog, index: number) => (
              <Dialog key={index} who={dialog.user === user.name}>
                { dialog.user !== user.name && <DialogFoto>{dialog.avatarka[0]}</DialogFoto> }
                  <DialogMessage theme={theme} who={dialog.user === user.name}>
                    <DialogUser theme={theme} who={dialog.user === user.name}>{dialog.user}</DialogUser>
                    <DialogText theme={theme}>{dialog.text}</DialogText>
                  </DialogMessage>
                { dialog.user === user.name && <DialogFoto>{user.name[0]}</DialogFoto> }
              </Dialog>
            ))}
          </Dialogs>
          <ChatDialogInput theme={theme}>
              <ChatDialogInputForm id={"chat_input"}>
                <ChatDialogInputEnter theme={theme} type={"text"} name={"age"} />
              </ChatDialogInputForm>
              <ChatDialogInputSend theme={theme} type={"submit"} form={"test"} value={"SEND"} />
            </ChatDialogInput>
        </ChatDialog>
      }
    </ChatWrapper>
  )
}