import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './pages/App'
import Menu from './pages/Menu'

ReactDOM.render(
  <React.StrictMode>
  <Menu />
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  )
