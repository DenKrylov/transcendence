import { atom } from "recoil";

export const locationState = atom({
  key: 'Location',
  default: 'home',
});