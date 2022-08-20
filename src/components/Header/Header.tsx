import { useRecoilState, useRecoilValue } from "recoil"
import { locationState } from "../../recoil/Location/Location";
import { getThemeState } from "../../recoil/Theme/getTheme"
import { tokenState } from "../../recoil/Token/Token";
import { userState } from "../../recoil/User/User";
import { HeaderControl, HeaderLogo, HeaderWrapper, HeaderButton } from "./HeaderStyle"

export const Header = () => {

	const theme = useRecoilValue(getThemeState);
	const [ location, setLocation ] = useRecoilState(locationState);
	const [token, setToken ] = useRecoilState(tokenState);
	const user = useRecoilValue(userState);

	return (
		<HeaderWrapper theme={theme}>
			<HeaderLogo theme={theme}>
				Transcendence
			</HeaderLogo>
			<HeaderControl>
				{token.length === 0 && <HeaderButton theme={theme} location={location} onClick={() => setToken('1')}>Login</HeaderButton> }
				{token.length !== 0 && <HeaderButton theme={theme} location={location} activePage={'home' === location} onClick={() => setLocation('home')}>Home</HeaderButton>}
				{token.length !== 0 && <HeaderButton theme={theme} location={location} activePage={'chat' === location} onClick={() => setLocation('chat')}>Chat</HeaderButton>}
				{token.length !== 0 && <HeaderButton theme={theme} location={location} activePage={'game' === location} onClick={() => setLocation('game')}>Game</HeaderButton>}
				{token.length !== 0 && <HeaderButton theme={theme} location={location} activePage={'user' === location} onClick={() => setLocation('user')}>{user.name}</HeaderButton>}
			</HeaderControl>
		</HeaderWrapper>
	)
}


// eslint-disable-next-line
{/* <HeaderLink theme={theme} href={'https://api.intra.42.fr/oauth/authorize?client_id=e6913671ec6ac35320789438577614d7abeb47d790d4839fc08afa5e3cb0fbb8&redirect_uri=http%3A%2F%2Flocalhost&response_type=code'}>Login</HeaderLink> */}