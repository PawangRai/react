import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(0) // The useState hook returns two things, a variable and a function for updating that variable, we initialize our variable with initial value 0 by using useState(0)

  // Now whenver we want our counter to change, we simply use the setCounter function to update it and React will update the UI.

  const addValue = () => {
    // counter = counter + 1 The counter value is being updated but that change is not being propagated to the UI. React does this automatically, we just have to use hooks to change it. That way, wherever we have used that counter, it will automatically be updated wherever it is present. 
    // setCounter(counter) Use setCounter to update the variable

    if (counter < 20) {
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1) 
      // If we have multiple state updates doing the same thing, React only considers the last one and our counter is incremented by 1 only. If we have a usecase where we have to increase the counter by 1 many times then we can use the below technique.

      setCounter(prev => prev + 1)
      setCounter(prev => prev + 1)
      setCounter(prev => prev + 1)
      setCounter(prev + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)     
    }
  }
  return (
    <>
    <h1>React is wonderful</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
