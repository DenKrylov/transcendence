import { useRecoilValue } from "recoil";

import { getThemeState } from "../../recoil/Theme/getTheme";
import { Start } from "../Start/Start";

import { BodyWrapper } from "./BodyStyle"

export const Body = () => {

	const theme = useRecoilValue(getThemeState);

	return (
		<BodyWrapper theme={theme}>
			<Start />
		</BodyWrapper>
	)   
}