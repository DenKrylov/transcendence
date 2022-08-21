import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getThemeState } from "../../recoil/Theme/getTheme";
import { tokenState } from "../../recoil/Token/Token";

import { Chat } from "../Chat/Chat";
import { Game } from "../Game/Game";
import { Start } from "../Home/Home";
import { User } from "../User/User";

import { BodyWrapper } from "./BodyStyle"

export const Body = () => {

	const theme = useRecoilValue(getThemeState);
	const token = useRecoilValue(tokenState);

	return (
		<>
			<BodyWrapper theme={theme}>
				<Routes>
					<Route path="/" element={<Start />}/>
					{ token === '' ? <Route path="home" element={<Start />}/> : <Route path="home" element={<Start />}/>}
					{ token !== '' ? <Route path="chat" element={<Chat />}/> : <Route path="home" element={<Start />}/>}
					{ token !== '' ? <Route path="game" element={<Game />}/> : <Route path="home" element={<Start />}/>}
					{ token !== '' ? <Route path="user" element={<User />}/> : <Route path="home" element={<Start />}/>}
					<Route path="*" element={<Start />}/>
				</Routes>
			</BodyWrapper>
		</>
	)   
}