import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [count,setCount] = useState(0);

  const addValue = () => {
        setCount(count+1);
  }
  const decValue = () => {
    if(count <= 0){
      alert("Value is already decreased to 0");
    }
    else{
    setCount(count-1);
    }
  }

  return (
    <div>
      <h1>Counter-App</h1>
      <div className="Container">
        <button onClick={addValue}>+</button>
        <p className="text-box" >{count}</p>
        <button onClick={decValue}>-</button>
      </div>
    </div>
  );
}

export default App;
