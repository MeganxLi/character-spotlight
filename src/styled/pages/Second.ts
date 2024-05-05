import styled from 'styled-components'

import RoleList from '../../constants/List'
import CircleStyled from '../components/Circle'
import rotateAnimation from '../util/Animation'
import { rwd } from '../util/Mixins'
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
  z-index: 50;
  text-shadow: 2px 2px ${colors.white50};

  ${rwd('tablet')} {
    background-color: ${colors.black25}
  }

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

const generateGridTemplateRWD = (current: number | null) => {
  const templateValues = []
  const changeCurrent = current === null ? 0 : current

  for (let i = 0; i < RoleList.length; i++) {
    switch (true) {
      case i === changeCurrent:
        templateValues.push('1fr')
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

  ${rwd('tablet')} {
    grid-template-columns: ${({ $current }) => generateGridTemplateRWD($current)};
  }
`

export const SecondRoleContent = styled.div<SecondRoleContentType>`
  background-color: ${(props) => (props.$backgroundcolor)};
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`
export const SecondImage = styled.div<SecondRoleImage>`
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat; 
  background-size: auto, cover;
  background-position: center 5rem;
  height: 100%;
  width: 100%;
  position: absolute;
  pointer-events: none;
`

export const SecondRoleTitle = styled.p`
  color: ${colors.white};
  font-size: 4rem; 
  text-transform: Uppercase;
  font-weight: 500;
  animation-name: ${rotateAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: both;
  position: absolute;  
  top: 20%;
  ${rwd('tablet')} {
    top: 15vh;
  }
`
