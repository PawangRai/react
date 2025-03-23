import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8) // length of password
  const [numberAllowed, setNumberAllowed] = useState(false) // are numbers allowed
  const [charAllowed, setCharAllowed] = useState(false) // are characters allowed
  const [password, setPassword] = useState("") // for updating password

  // In order to make the copy to clipboard function work, we can use the useRef hook.
  // useRef hooks stores value inside of it without causing re-render. It can be used for accessing DOM elements or persisting values between renders.
  const passwordRef = useRef(null)  

  // passwordGenerator method will be called whenever the number is toggled or characters are toggled or when the length is changed so there is a hook named useCallback that helps in method execution so many times.

  // useCallback remembers your function so that it does not need to call the function everytime the app re-renders, it just needs to call the function whenever one of it's dependencies change, it improves optimization.
  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

    },
    [length, numberAllowed, charAllowed, setPassword]
  )

  const copyPasswordToClipboard = useCallback(
    () => {
      // passwordRef.current?.select() This method highlights the password so that the user knows that the password is copied.
      passwordRef.current?.setSelectionRange(0,30) // We can also give it some range to select
      window.navigator.clipboard.writeText(password) // copies the password to the clipboard
    },
    [password],
  )
  

  // Now we can either create a button and attach an onclick in it, which will call the passwordGenerator() function or we can make use of another hook which is known as useEffect()

  // useEffect() hook basically runs the code inside of it when a component is loaded or when dependencies change
  useEffect(() => {  
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-center'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} // For referencing this input element to facilitate the copy function
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} // whenever slider is changed, the new value is taken and the length variable is changed to that length using setLength. 
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
