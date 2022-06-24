import { createGlobalStyle } from 'styled-components'

import font from './base/font'
import more from './base/more'
import reset from './base/reset'

const GlobalStyle = createGlobalStyle`
  ${font}
  ${more}
  ${reset}
`

export default GlobalStyle
