import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

// We can pass in values from one component to another using props, using props allows us to for example, make cards and then populate those cards with data coming from the parent component.

// We must pass data as props into a single variable, i.e create an object or an array and then pass that as a prop to the card component, in the card component, you can handle how you want to use the data passed as props.

const dataCard1 = {
  name: "Italy",
  description: "A beautiful country",
  btnText: "Click to read more"
}

const dataCard2 = {
  name: "Germany",
  description: "Land of opportunities",
  btnText: "Click to view more"
}

function App() {
  const [count, setCount] = useState(0)

 
  

  return (
   <>
    <h1 className='bg-green-500 text-black p-5 rounded-xl mb-4'>Working with Tailwind</h1>
   <div className='flex space-x-4'>
    <Card data={dataCard1}/>
    <Card data={dataCard2}/>
   </div>
   
   </>
  )
}

export default App
