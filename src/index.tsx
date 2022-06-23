import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
/*
 * NOTE: 왜 설치하면 바로 되야되는거 아니야?
 * ? 안먹히네
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
