import { ChevronLeft, ChevronRight } from 'react-feather'

import ICON_SIZE from '../constants/EnumType'
import { SwitchStyled } from '../styled/pages/Second'

interface SwitchProps {
  next: boolean,
  current: number,
  onChange: (calcCurrent: number) => void
}
const Switch = ({ next, current, onChange }: SwitchProps) => {
  const clickSwitch = () => {
    const calcCurrent = next ? current + 1 : current - 1
    onChange(calcCurrent)
  }
  return (
    <SwitchStyled $nextDirection={next} onClick={clickSwitch}>

      {next ? <ChevronRight size={ICON_SIZE} /> : <ChevronLeft size={ICON_SIZE} />}
    </SwitchStyled>
  )
}

export default Switch
