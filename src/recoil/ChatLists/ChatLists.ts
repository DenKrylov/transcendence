import { atom } from "recoil";

export const chatListsState = atom({
  key: 'chatLists',
  default: [
    {name: 'Den', id: '010', lastMessage: 'hi'},
    {name: 'Den', id: '0122', lastMessage: 'hi'},
    {name: 'Den', id: '011', lastMessage: 'hi'},
    {name: 'Den', id: '0123', lastMessage: 'hi'},
    {name: 'Den', id: '012', lastMessage: 'hi'},
    {name: 'Den', id: '0125', lastMessage: 'hi'},
  ],
});