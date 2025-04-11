import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Lets say we are asked to build a react component in which we have to display a number and also display that same number multiplied by some other number. We need to show both the numbers. A way to do this problem is to get the state of both numbers and then update both states when the button is clicked. This way gets the job done but it could have been done in a much better way.

// Here we have created two different states, but what happens is that whenever a state changes so react re-renders the entire component so instead of defining a state for the multiplied value, we can simple declare it in a variable.
function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value * 5 // -> This will work as intended because whenever the multiplybyfive method is called, value is updated using setState which will cause the entire component to re-render which will also increase the multiplied value.


  // React updates state when the value is changed, if the value is the same as the previous value the state does not get updated. But if an object is passed, and that object is the previous value, then no matter what the value is, the app is re-rendered, this is because objects are passed as copies instead of the actual objects, so it thinks of those objects as new objects so that is why app is re-rendered everytime an object is passed.

  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }
  return (
   <>
    <h1>
      Main value: {value}
    </h1>
    <button
    onClick={multiplybyfive}>Click to multiply by 5</button>
    <h2>
      Multiplied value: {multipliedValue}
    </h2>
   </>
  )
}

export default App
