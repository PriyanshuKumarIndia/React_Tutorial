import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl align-center'>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"red",color:'white'}}
            onClick={()=> setColor("red")}
            >Red</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"green",color:'white'}}
            onClick={()=> setColor("green")}
            >Green</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"blue",color:'white'}}
            onClick={()=> setColor("blue")}
            >Blue</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"purple",color:'white'}}
            onClick={()=> setColor("purple")}
            >Purple</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"yellow",color:'black'}}
            onClick={()=> setColor("yellow")}
            >Yellow</button>
            <button className='outline-none px-4 rounded-full pb-1 shadow'
            style={{backgroundColor:"white",color:'black'}}
            onClick={()=> setColor("white")}
            >White</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"pink",color:'black'}}
            onClick={()=> setColor("pink")}
            >Pink</button>
            <button className='outline-none px-4 rounded-full pb-1'
            style={{backgroundColor:"lavender",color:'black'}}
            onClick={()=> setColor("lavender")}
            >Lavender</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
