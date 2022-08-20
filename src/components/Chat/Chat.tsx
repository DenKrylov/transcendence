import { useState } from "react";
import { useRecoilValue } from "recoil";

import { chatListsState } from "../../recoil/ChatLists/ChatLists";
import { DialogListsState } from "../../recoil/DialogLists/DialogLists";
import { getThemeState } from "../../recoil/Theme/getTheme";
import { userState } from "../../recoil/User/User";

import { ChatDialog, ChatList, ChatLists, ChartListFoto, ChatWrapper, Dialog, DialogFoto, DialogUser, DialogText, DialogMessage, ChatDialogInput, ChatListName, ChatListLastMesseage, ChartListInfo, ChatDialogInputForm, ChatDialogInputEnter, ChatDialogInputSend, Dialogs } from "./ChatStyle"

interface typeList {
  name: string,
  id: string,
  lastMessage: string,
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
  const listDialog = useRecoilValue(DialogListsState);
  const user = useRecoilValue(userState);

  const [ heightDialogs, setHeightDialogs ] = useState((window.outerHeight - (16 * 21)) / 16);
  const [ vieweScroll, setVieweScroll] = useState(false);

  return (
    <ChatWrapper>
      <ChatLists theme={theme}>
        { listChat.map((item: typeList) => (
          <ChatList key={item.id} theme={theme} onClick={() => console.log(item.id)}>
            <ChartListFoto></ChartListFoto>
            <ChartListInfo>
              <ChatListName theme={theme}>{item.name}</ChatListName>
              <ChatListLastMesseage theme={theme}>{item.lastMessage}</ChatListLastMesseage>
            </ChartListInfo>
          </ChatList>
        ))}
      </ChatLists>
      <ChatDialog>
        <Dialogs heightDialogs={heightDialogs} vieweScroll={vieweScroll} theme={theme} onMouseEnter={() => setVieweScroll(true)} onMouseLeave={() => setVieweScroll(false)}>
          { listDialog.map((dialog: typeDialog, index: number) => (
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
    </ChatWrapper>
  )
}