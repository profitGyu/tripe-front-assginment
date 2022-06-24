import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Routes from './routes'
import GlobalStyle from './styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <GlobalStyle />
    <Routes />
  </StrictMode>,
)
