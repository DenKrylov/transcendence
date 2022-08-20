import { StartWrappre, StartImg } from "./HomeStyle"
import logo from '../../img/logo.png'

export const Start = () => {
  return (
    <StartWrappre>
      <StartImg src={logo} alt={'Logo'} />
    </StartWrappre>
  )
}