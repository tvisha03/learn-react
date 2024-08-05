import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement= React.createElement(
  'a',
  {href:'https://reactjs.org',target:'_blank'},
  'click me to visit react'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    {reactElement}
    </>
)
