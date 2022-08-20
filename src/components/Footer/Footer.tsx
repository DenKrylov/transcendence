import { useRecoilState, useRecoilValue } from "recoil";
import { bestGamerState } from "../../recoil/BestGamer/BestGamer";

import { getThemeState } from "../../recoil/Theme/getTheme";
import { themeState } from "../../recoil/Theme/Theme";

import { FooterControl, FooterLogo, FooterWrapper } from "./FooterStyle"

export const Footer = () => {
	
	const theme = useRecoilValue(getThemeState);
	const [ changeTheme, setChangeTheme ] = useRecoilState(themeState);
	const bestGamer = useRecoilValue(bestGamerState);

	const logo = require('../../icon/brightness_6_black_24dp.svg');

	return (
		<FooterWrapper theme={theme}>
			<FooterLogo theme={theme}>Best gamer: {bestGamer}</FooterLogo>
			<FooterLogo theme={theme}>2022 &copy; Transcendence</FooterLogo>
			<img src={logo} onClick={() => setChangeTheme(!changeTheme)} />
		</FooterWrapper>
	)
}