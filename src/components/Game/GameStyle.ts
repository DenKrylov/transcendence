import styled from "styled-components";
import { Theme } from "../../indexStyle";

interface Props {
  theme?: Theme;
  position?: number;
  positionBall?: number[];
}

export const GameWrapper = styled.article`
  position: relative;
  display: flex;
  height: 100%;
`;

export const User1 = styled.div<Props>`
  position: absolute;
  top: ${({position}) => position}rem;
  left: 0;
  height: 20vh;
  width: .7vw;
  background: ${({theme}) => theme.foregroundLink};
  border-radius: 0 .3rem .3rem 0;
`;

export const User2 = styled.div<Props>`
  position: absolute;
  top: ${({position}) => position}rem;
  right: 0;
  height: 20vh;
  width: .7vw;
  background: ${({theme}) => theme.foregroundPositive};
  border-radius: .3rem 0 0 .3rem;
`;

export const Ball = styled.div<Props>`
  position: absolute;
  top: ${({positionBall}) => positionBall?.[0]}%;
  left: ${({positionBall}) => positionBall?.[1]}%;
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  background: ${({theme}) => theme.backgroundNormal};
  border: .3rem solid ${({theme}) => theme.foregroundNeutral};
  box-sizing: border-box;
`;

export const PlaygroundUser1 = styled.div<Props>`
  position: absolute;
  left: 0;
  top: 0;
  width: 50vw;
  height: 100%;
  border-right: 1px solid ${({theme}) => theme.foregroundPositive};
  border-top: 1px solid ${({theme}) => theme.foregroundPositive};
  border-bottom: 1px solid ${({theme}) => theme.foregroundPositive};
`;

export const PlaygroundUser2 = styled.div<Props>`
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100%;
  border-left: 1px solid ${({theme}) => theme.decorationFocus};
  border-top: 1px solid ${({theme}) => theme.decorationFocus};
  border-bottom: 1px solid ${({theme}) => theme.decorationFocus};
`;