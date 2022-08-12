import { useRecoilValue } from "recoil"
import { locationState } from "../../recoil/Location/Location";
import { getThemeState } from "../../recoil/Theme/getTheme"
import { HeaderControl, HeaderLogo, HeaderWrapper } from "./HeaderStyle"

export const Header = () => {

	const theme = useRecoilValue(getThemeState);
	const location = useRecoilValue(locationState);

	return (
		<HeaderWrapper theme={theme}>
			<HeaderLogo theme={theme}>
				Transcendence
			</HeaderLogo>
			<HeaderControl>
				{location === 'start' && <div>start</div>}
				{location === 'chat' && <div>chat</div>}
				{location === 'game' && <div>chat</div>}
			</HeaderControl>
		</HeaderWrapper>
	)
}