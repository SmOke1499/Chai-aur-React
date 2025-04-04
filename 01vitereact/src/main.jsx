import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chai from './chai.js'

function MyApp() {
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank' 
//   },
//   children: 'Click me to visit Google'
// }

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click Me to visit Google'
)

const anotherElement = (
    <a href="https://google.com" target='_blank'> visit google </a>
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai />
    <MyApp />
    ReactElement
    <br />
    anotherElement
  </>

)
