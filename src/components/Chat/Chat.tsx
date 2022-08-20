import { useRecoilValue } from "recoil";

import { chatListsState } from "../../recoil/ChatLists/ChatLists";
import { DialogListsState } from "../../recoil/DialogLists/DialogLists";
import { getThemeState } from "../../recoil/Theme/getTheme";

import { ChatDialog, ChatList, ChatLists, ChartListFoto, ChatWrapper, Dialog, DialogAvatarka, DialogUser, DialogText, DialogMessage, ChatDialogInput, ChatListName, ChatListLastMesseage, ChartListInfo, ChatDialogInputForm, ChatDialogInputEnter, ChatDialogInputSend } from "./ChatStyle"

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
        { listDialog.map((dialog: typeDialog, index: number) => (
          <Dialog key={index}>
            { dialog.user !== 'Monie' && <DialogAvatarka>{dialog.avatarka}</DialogAvatarka> }
              <DialogMessage  theme={theme}>
                <DialogUser>{dialog.user}</DialogUser>
                <DialogText>{dialog.text}</DialogText>
              </DialogMessage>
            { dialog.user === 'Monie' && <DialogAvatarka>{dialog.avatarka}</DialogAvatarka> }
          </Dialog>
        ))}
        <ChatDialogInput theme={theme}>
          <ChatDialogInputForm id="chat_input">
            <ChatDialogInputEnter theme={theme} type={"text"} name={"age"} />
          </ChatDialogInputForm>
          <ChatDialogInputSend theme={theme} type={"submit"} form={"test"} value={"SEND"} />
        </ChatDialogInput>
      </ChatDialog>
    </ChatWrapper>
  )
}