import { atom } from "recoil";

export const DialogListsState = atom({
  key: 'dialogLists',
  default: [
    {id: '01', avatarka: 'ava', user: 'Monie',  text: 'texttexttexttexttexttexttexttexttext'},
    {id: '01', avatarka: 'ava', user: 'Tonie',  text: 'text'},
    {id: '01', avatarka: 'ava', user: 'Zonie',  text: 'text'},
    {id: '01', avatarka: 'ava', user: 'Monie',  text: 'text'},
    {id: '01', avatarka: 'ava', user: 'Tonie',  text: 'text'},
    {id: '01', avatarka: 'ava', user: 'zonie',  text: 'text'},
  ],
});