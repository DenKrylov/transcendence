import { useRecoilState, useRecoilValue } from "recoil"
import { locationState } from "../../recoil/Location/Location";
import { getThemeState } from "../../recoil/Theme/getTheme"
import { tokenState } from "../../recoil/Token/Token";
import { HeaderControl, HeaderLogo, HeaderWrapper, HeaderButton, HeaderUser } from "./HeaderStyle"

export const Header = () => {

	const theme = useRecoilValue(getThemeState);
	const location = useRecoilValue(locationState);
	const [token, setToken ] = useRecoilState(tokenState);

	return (
		<HeaderWrapper theme={theme}>
			<HeaderLogo theme={theme}>
				Transcendence
			</HeaderLogo>
			<HeaderControl>
				{(location === 'start' && token.length === 0) && <HeaderButton theme={theme} location={location} onClick={() => setToken('1')}>Login</HeaderButton> }
				{(location === 'start'&& token.length !== 0) && <HeaderButton theme={theme} location={location}>Home</HeaderButton>}
				{token.length !== 0 && <HeaderButton theme={theme} location={location}>Chat</HeaderButton>}
				{token.length !== 0 && <HeaderButton theme={theme} location={location}>Game</HeaderButton>}
				{token.length !== 0 
					&& <HeaderUser>
						Monie
						Foto
						</HeaderUser>}
			</HeaderControl>
		</HeaderWrapper>
	)
}


// eslint-disable-next-line
{/* <HeaderLink theme={theme} href={'https://api.intra.42.fr/oauth/authorize?client_id=e6913671ec6ac35320789438577614d7abeb47d790d4839fc08afa5e3cb0fbb8&redirect_uri=http%3A%2F%2Flocalhost&response_type=code'}>Login</HeaderLink> */}