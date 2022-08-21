import { atom } from "recoil";

export const gameState = atom({
  key: 'game',
  default: {
    user1: 10, // от 0
    user2: 30, // от 0 
    ball: [50, 97], // 0 - от 0 до 100; 1 - от 0 до 97
  }
});