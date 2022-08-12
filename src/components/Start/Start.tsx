import { StartWrappre, StartImg } from "./StartStyle"
import logo from '../../img/logo.png'

export const Start = () => {
  return (
    <StartWrappre>
      <StartImg src={logo} alt={'Logo'} />
    </StartWrappre>
  )
}