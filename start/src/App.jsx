import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  // const [data,setdata]=useState("Hello");
  // function fun()
  // {
  //   setdata("Changed value")
  // }
  // //Assignment 1
  // const [status, setStatus]=useState("OFF");
  // function toggleButton(){
  //   if(status==="OFF"){
  //     setStatus("ON");
  //   }else{
  //     setStatus("OFF");
  //   }

  
  // }

  // return(
  //   <>
  //   <h1>State of variable</h1>
  //   <h1>{data}</h1>
  //   <button onClick={fun}>click</button>
  //   //Assignment 1
  //   <h1>Toggle Button</h1>

  //     <button onClick={toggleButton}>{status}</button>

  //   </>
  // )
  // let data="Demo"
  //  function updata()
  //  {
  //   data="Example"
  //   alert(data);
  //  }
    
  // return(
  //   <>
  //   <h1>State in react</h1>
  //   <h1>{data}</h1>
  //   <button onClick={updata}>Click to change value</button>
    
  //   </>
  // )
  
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
  
// }
// export default App
// import React, { useState } from "react";


//Assignment Viva 1

// function Counter() {
//   // state to store the counter value
//   const [count, setCount] = useState(0);

//   // event handlers
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>

//       <button onClick={increment}>+</button>
//       <button onClick={decrement} style={{ margin: "0 10px" }}>
//         -
//       </button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;





// Assignment 2 in Viva

//import React, { useState } from "react";

// function ToggleText() {
//   // state to track visibility
//   const [isVisible, setIsVisible] = useState(false);

//   // toggle function
//   const toggleText = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <button onClick={toggleText}>
//         {isVisible ? "Hide Text" : "Show Text"}
//       </button>

//       {isVisible && <h2>This text is now visible</h2>}
//     </div>
//   );
// }

// export default ToggleText;


// Assignment 3 in Viva

// //import React, { useState } from "react";

// function LiveInput() {
//   // state to store input value
//   const [text, setText] = useState("");

//   // handle input change
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Live Input Display</h1>

//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />

//       <h2>You typed: {text}</h2>
//     </div>
//   );
// }

// export default LiveInput;


// Assignment 4 in Viva




// //import React, { useState } from "react";

// function ThemeToggle() {
//   // state to track theme
//   const [isDark, setIsDark] = useState(false);

//   // toggle function
//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // styles based on state
//   const appStyle = {
//     backgroundColor: isDark ? "#222" : "#fff",
//     color: isDark ? "#fff" : "#000",
//     height: "100vh",
//     textAlign: "center",
//     paddingTop: "50px",
//     transition: "0.3s"
//   };

//   return (
//     <div style={appStyle}>
//       <h1>{isDark ? "Dark Mode " : "Light Mode "}</h1>

//       <button onClick={toggleTheme}>
//         Switch to {isDark ? "Light" : "Dark"} Mode
//       </button>
//     </div>
//   );
// }

// export default ThemeToggle;

// Assignment 5 in Viva




//import React, { useState } from "react";

function LikeButton() {
  // state to store like count
  const [likes, setLikes] = useState(0);

  // handle like click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>👍 Likes: {likes}</h1>

      <button onClick={handleLike}>
        Like ❤️
      </button>
    </div>
  );
}

export default LikeButton;

