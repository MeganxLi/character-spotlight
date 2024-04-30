import { ChevronRight } from 'react-feather'

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
      <ChevronRight size={28} />
    </SwitchStyled>
  )
}

export default Switch
