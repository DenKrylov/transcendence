import { useRecoilValue } from "recoil";
import { locationState } from "../../recoil/Location/Location";
import { getThemeState } from "../../recoil/Theme/getTheme";

import { Chat } from "../Chat/Chat";
import { Game } from "../Game/Game";
import { Start } from "../Start/Start";

import { BodyWrapper } from "./BodyStyle"

export const Body = () => {

	const theme = useRecoilValue(getThemeState);
	const location = useRecoilValue(locationState);

	return (
		<BodyWrapper theme={theme}>
			{location === 'home' && <Start />}
			{location === 'chat' && <Chat />}
			{location === 'game' && <Game />}
		</BodyWrapper>
	)   
}