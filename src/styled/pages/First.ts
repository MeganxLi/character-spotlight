import styled from 'styled-components'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

export const FirstPage = styled.main`
 height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transition: 2s;

  ${rwd('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${rwd('mobile')} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RoleContent = styled.div<RoleContentType>`
  background: ${colors.black};
  color: #fff;
  margin: 2px;
  padding: 2.5rem 1rem;
  transition: 0.5s;
  display: grid;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    transform: translateY(20px);
    transition: transform 0.3s ease;
    opacity: 0;
  }

  &:hover {
    background: ${(props) => (props.backgroundColor)};
    #ArrowIcon {
      transform: rotate(-60deg);
      color: ${colors.black};
      border-color: ${colors.black};
    }

    img {
      transform: translateY(0);
      opacity: 1;
    }

    color: ${colors.black};
  }
`

export const RoleContentTitle = styled.div``

export const RoleContentName = styled.h3`
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: Uppercase;
  margin-bottom: 0.2rem;
`

export const RoleContentRole = styled.h4`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`

const IconsSize = '2.5rem'
export const ArrowIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: ${IconsSize};
  height: ${IconsSize};
  border: 2px solid #fff;
  border-radius: 50px;
  transition: 0.3s;
  margin-top: 2rem;
`
