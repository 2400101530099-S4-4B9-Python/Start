import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let data="Demo"
   function updata()
   {
    data="Example"
    alert(data);
   }
    
  return(
    <>
    <h1>State in react</h1>
    <h1>{data}</h1>
    <button onClick={updata}>Click to change value</button>
    
    </>
  )
  
  //   function callFun()
  //   {
  //       alert("Click")
  //   }
  //   const fruit=(name)=>
  //   {
  //     alert("Example of arrow function")
  //   }
  //    const type=(name)=>
  //   {
  //     alert("Types of Fruit")
  //   }
    
  // return(
  //   <>
  //   <h1>Example of Arrow Funtion</h1>
  //   <button onClick={callFun}>Click to call function</button>
  //   <button onClick={()=>fruit("first parameter")}>Arrow Function</button>
  //   <button onClick={()=>type("first parameter")}>Banana</button>
  //   <button onClick={()=>type("first parameter")}>Apple</button>
  //   </>
  // )
  
}
export default App