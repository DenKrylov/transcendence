import { atom } from "recoil";

export const userState = atom({
  key: 'user',
  default: {
    name: 'Monie',
    age: 10,
    rating: 10,
  },
});