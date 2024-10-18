import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const incr = ()=>{
    count+=1;
    if(count>20){
      count=20;
    }
    setCount(count);
  }
  const decr = ()=>{
    count-=1;
    if(count<0){
      count = 0;
    }
    setCount(count);
  }

  return (
    <>
        <h2>Up and Down</h2>
        <br></br>
        <h4>{count}</h4>
        <p>counter value is {count}</p>
        <br></br>
        <button onClick={incr}>Increment {count}</button>
        <br></br>
        <button onClick={decr}>Decrement {count}</button>
    </>
  )
}

export default App
