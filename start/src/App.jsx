import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function CallFun()
        {
            alert("You are click on OK button")
        }
  function Banana()
        {
            alert("You are click on BANANA button")
        }
   function Apple()
        {
            alert("You are click on APPLE button")
        }     
  return(
<>
    <button onClick={CallFun}>OK</button>
    <button onClick={Banana}>BANANA</button>
    <button onClick={Apple}>APPLE</button>
    <h1>WELCOME TO EVENT HANDLING</h1>
</>
  )
}
export default App