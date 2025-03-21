// Always keep the first letter of your components as capital, also save your filename's first letter as capital.
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function MyNewApp(){ 
    return (
        <div>My custom new app</div>
    )
} // Creating a component here works and calling it in the react render method works

// React converts our component outputs into a tree like structure similar to the one shown below

const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com/",
      target: "_blank",
    },
    children: "Click me to visit Google",
  };
// However we cannot directly output it because the react render method expects some other name for type, props etc or it has a different syntax than the one we have defined for this object.

const anotherElement = (
    <a href="https://www.google.com/" target='_blank'>Click to go to Google</a>
)

// React itself gives us a react.createElement through which we can create react elements
const workingReactElement = React.createElement(
    'a',
    {href: "https://www.google.com", target: "_blank"},
    "You need to click here to go to Google"
)

// We can inject javascript variables in JSX using the {}, we have to output the final output, we can't use conditionals or loops in here


createRoot(document.getElementById('root')).render(
    workingReactElement
)
