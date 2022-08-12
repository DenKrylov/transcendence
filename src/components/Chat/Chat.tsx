import { useRecoilValue } from "recoil";
import { chatListsState } from "../../recoil/ChatLists/ChatLists";
import { getThemeState } from "../../recoil/Theme/getTheme";
import { ChatDialog, ChatList, ChatLists, ChartListAva, ChatWrapper } from "./ChatStyle"

interface typeList {
  name: string,
  id: string,
  lastMessage: string,
}

export const Chat = () => {

  const theme = useRecoilValue(getThemeState);
  const lists = useRecoilValue(chatListsState);

  return (
    <ChatWrapper>
      <ChatLists theme={theme}>
        { lists.map((item: typeList) => (
          <ChatList key={item.id} theme={theme} onClick={() => console.log(item.id)}>
            <ChartListAva></ChartListAva>
            {item.name}
            {item.lastMessage}
          </ChatList>
        ))}
      </ChatLists>
      <ChatDialog>af</ChatDialog>
    </ChatWrapper>
  )
}