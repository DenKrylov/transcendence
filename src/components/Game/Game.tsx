import { useRecoilValue } from "recoil"
import { gameState } from "../../recoil/Game/Game";

import { getThemeState } from "../../recoil/Theme/getTheme";

import { Ball, GameWrapper, PlaygroundUser1, PlaygroundUser2, User1, User2 } from "./GameStyle";

export const Game = () => {

  const theme = useRecoilValue(getThemeState);
  const game = useRecoilValue(gameState);

  return (
    <GameWrapper>
      <PlaygroundUser1 theme={theme} />
      <PlaygroundUser2 theme={theme} />
      <User1 theme={theme} position={game.user1}/>
      <User2 theme={theme} position={game.user2}/>
      <Ball theme={theme} positionBall={game.ball}/>
    </GameWrapper>
  )
}