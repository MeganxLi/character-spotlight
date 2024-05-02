import styled from 'styled-components'

import CircleStyled from '../components/Circle'
import colors from '../util/Variables'

// Component
const SwitchSize = '4rem'
export const SwitchStyled = styled(CircleStyled) <SwitchType>`
  transform: ${(prop) => ((prop.$nextDirection ? '' : 'rotate(180deg)'))};
  width: ${SwitchSize};
  height: ${SwitchSize};
  cursor: pointer;

  &:hover, &:active{
    background-color: ${colors.white50};
  }
`

// Page
const gridWidth = '0.2fr'
const showGridTemplate = (current: number | null) => {
  // The "repeat" setting cannot be configured for animations; it needs to be set individually.
  // let templateStyled = ''
  // if (current === null) {
  //   templateStyled = '1fr 1fr 1fr 1fr'
  // } else {
  //   templateStyled = '1fr'
  //   for (let i = 1; i < RoleList.length; i++) {
  //     templateStyled += ' 150px'
  //   }
  //   // templateStyled += ` ${'1fr '.repeat(RoleList.length - 1)}`
  // }

  // return templateStyled

  switch (current) {
    case 0:
      return '1fr 0fr 0fr 0fr'
    case 1:
      return `${gridWidth} 1fr 0fr 0fr`
    case 2:
      return `${gridWidth} ${gridWidth} 1fr 0fr`
    case 3:
      return `${gridWidth} ${gridWidth} ${gridWidth} 1fr`
    default:
      return '1fr 1fr 1fr 1fr'
  }
}
export const SecondPage = styled.main<SecondPageType>`
  background-color:${colors.black};
  height:100vh;
  display: grid;
  grid-template-columns: ${({ $current }) => showGridTemplate($current)};
  transition: 2s;
`

export const SecondRoleContent = styled.div<SecondRoleContentType>`
  background-color: ${(props) => (props.$backgroundcolor)};
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5rem;
  /* display: ${({ $clickRole, $key }) => ($clickRole !== null && $clickRole <= $key - 1 ? 'none' : 'block')}; */
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`
