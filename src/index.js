import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import ErrorBoundary from './components/error-boundary'
import App from './App'

import './index.css'

import './style.css'


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>    
          <App />      
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
