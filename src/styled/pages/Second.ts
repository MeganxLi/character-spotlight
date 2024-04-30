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
export const SecondPage = styled.main`
  background-color:${colors.black};
  height:100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transition: 2s;
`

export const SecondRoleContent = styled.div<RoleContentType>`
  background-color: ${(props) => (props.$backgroundcolor)};
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5rem;
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`
