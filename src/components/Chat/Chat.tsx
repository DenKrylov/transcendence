import { useRecoilValue } from "recoil";
import { chatListsState } from "../../recoil/ChatLists/ChatLists";
import { DialogListsState } from "../../recoil/DialogLists/DialogLists";
import { getThemeState } from "../../recoil/Theme/getTheme";
import { ChatDialog, ChatList, ChatLists, ChartListAva, ChatWrapper, Dialog, DialogAvatarka, DialogUser, DialogText, DialogMessage, ChatDialogInput } from "./ChatStyle"

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
            <ChartListAva></ChartListAva>
            {item.name}
            {item.lastMessage}
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
        <ChatDialogInput>
          <input type="text" />
          <button>Sen</button>
        </ChatDialogInput>
      </ChatDialog>
    </ChatWrapper>
  )
}