import { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  0% { 
    transform: rotate(270deg) translate(-50%, -50%); 
    font-size: 4rem; 
    opacity: 0.5;
    left: 10%;
  }
  100% { 
    font-size: 25vw; 
    opacity: 1;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default rotateAnimation
