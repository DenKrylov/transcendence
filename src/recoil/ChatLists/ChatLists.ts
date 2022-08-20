import { atom } from "recoil";

export const chatListsState = atom({
  key: 'chatLists',
  default: [
    {name: 'user1', id: '010', lastMessage: 'hizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
    {name: 'user2', id: '0122', lastMessage: 'hi'},
    {name: 'user3', id: '0123', lastMessage: 'hi'},
    {name: 'user4', id: '0124', lastMessage: 'hi'},
    {name: 'user5', id: '0125', lastMessage: 'hi'},
    {name: 'user6', id: '0126', lastMessage: 'hi'},
  ],
});