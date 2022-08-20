import { atom } from "recoil";

export const chatListsState = atom({
  key: 'chatLists',
  default: [
    {name: 'Monie', id: '010', lastMessage: 'hizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
    {name: 'Monie', id: '0122', lastMessage: 'hi'},
    {name: 'Monie', id: '0123', lastMessage: 'hi'},
    {name: 'Monie', id: '0124', lastMessage: 'hi'},
    {name: 'Monie', id: '0125', lastMessage: 'hi'},
    {name: 'Monie', id: '0126', lastMessage: 'hi'},
  ],
});