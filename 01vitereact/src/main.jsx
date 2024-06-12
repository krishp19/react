/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const AnotherUser = "Chai aur hello"

// eslint-disable-next-line react-refresh/only-export-components
const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  "Click me to visit google",
  AnotherUser
)

// eslint-disable-next-line react-refresh/only-export-components


ReactDOM.createRoot(document.getElementById('root')).render(
  
  ReactElement
  
)
