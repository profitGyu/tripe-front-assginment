import { keyframes } from 'styled-components'

const animation = {
  fadeIn: keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50%{
    opacity: 0;
    transform: translateY(10px);
  }
  99%{
    opacity: 0.8;
    transform: translateY(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,
}
export default animation
