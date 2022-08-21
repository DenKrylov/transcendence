import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil"

import { getThemeState } from "../../recoil/Theme/getTheme"
import { tokenState } from "../../recoil/Token/Token";
import { userState } from "../../recoil/User/User";

import { 
	HeaderControl,
	HeaderLogo,
	HeaderWrapper,
	HeaderButton
} from "./HeaderStyle"

export const Header = () => {

	const theme = useRecoilValue(getThemeState);
	const [token, setToken ] = useRecoilState(tokenState);
	const user = useRecoilValue(userState);
	
	return (
		<>
			<HeaderWrapper theme={theme}>
				<HeaderLogo theme={theme}>
					Transcendence
				</HeaderLogo>
				<HeaderControl>
					{token.length === 0 && <Link to="/" onClick={() => setToken('1')}><HeaderButton theme={theme}>Login</HeaderButton></Link> }
					{token.length !== 0 && <Link to="/home"><HeaderButton theme={theme} activePage={true}>Home</HeaderButton></Link>}
					{token.length !== 0 && <Link to="/chat"><HeaderButton theme={theme}>Chat</HeaderButton></Link>}
					{token.length !== 0 && <Link to="/game"><HeaderButton theme={theme}>Game</HeaderButton></Link>}
					{token.length !== 0 && <Link to="/user"><HeaderButton theme={theme}>{user.name}</HeaderButton></Link>}
				</HeaderControl>
			</HeaderWrapper>
		</>
	)
}


// eslint-disable-next-line
{/* <HeaderLink theme={theme} href={'https://api.intra.42.fr/oauth/authorize?client_id=e6913671ec6ac35320789438577614d7abeb47d790d4839fc08afa5e3cb0fbb8&redirect_uri=http%3A%2F%2Flocalhost&response_type=code'}>Login</HeaderLink> */}