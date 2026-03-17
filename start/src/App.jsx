import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name="PRINCE";
  var x=10;
  var y=20;
  function fun()
  {
    return "Prince";
  }
  function sum(a,b)
  {
    return a+b;
  }

  function calc(a,b,op)
  {

  } 
  return (
    <div>
    <h1>User Variable with JSX</h1>
    <h3>Value of Variable is {name}</h3>
    <h3>Add of x and y = {x+y}</h3>
    <h1>Use of funtion with JSX</h1>
    <h3>Example of simple function {fun()}</h3>
    <h3>Example of Parametrised function {sum(20,30)}</h3>
    </div>
  )
}
export default App