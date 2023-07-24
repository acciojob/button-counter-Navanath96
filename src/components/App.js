
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [click,setclick]=useState("0");

  return (
    <div>
        {/* Do not remove the main div */}
        <p>
          Button clicked {click} times
        </p>
        <button type="submit" onClick={()=>{
          setclick(click+1);
        }}>Click me</button>
    </div>
  )
}

export default App
