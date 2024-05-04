import styled from 'styled-components'

import RoleList from '../../constants/List'
import CircleStyled from '../components/Circle'
import colors from '../util/Variables'

// Component
const SwitchSize = '4rem'
export const SwitchStyled = styled(CircleStyled) <SwitchType>`
  width: ${SwitchSize};
  height: ${SwitchSize};
  cursor: pointer;
  position: absolute;
  top: 60%;
  ${({ $nextDirection }) => ($nextDirection ? 'right: 10%;' : 'left: 10%;')}

  &:hover, &:active{
    background-color: ${colors.white50};
  }
`

// Page
const gridWidth = '0.2fr'
const generateGridTemplate = (current: number | null) => {
  // The "repeat" setting cannot be configured for animations; it needs to be set individually.
  const templateValues = []

  for (let i = 0; i < RoleList.length; i++) {
    switch (true) {
      case current === null:
        templateValues.push('1fr')
        break
      case i === current:
        templateValues.push('1fr')
        break
      case i < current!:
        templateValues.push(gridWidth)
        break
      default:
        templateValues.push('0fr')
        break
    }
  }

  return templateValues.join(' ')
}
export const SecondPage = styled.main<SecondPageType>`
  background-color:${colors.black};
  height:100vh;
  display: grid;
  grid-template-columns: ${({ $current }) => generateGridTemplate($current)};
  transition: 0.8s;
`

export const SecondRoleContent = styled.div<SecondRoleContentType>`
  background-color: ${(props) => (props.$backgroundcolor)};
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat; 
  background-size: auto, cover;
  background-position: center 5rem;
  height: 100%;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`
