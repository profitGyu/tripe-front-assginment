import { keyframes } from 'styled-components'

const animation = {
  fadeIn: keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }


  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
}
export default animation
