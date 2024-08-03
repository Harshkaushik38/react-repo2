import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const domelement = (
    <a href="https://www.google.com"> visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visited google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)

