import { useState } from 'react'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello</h1>

     <Card naam="Priyanshu" btnTxt="Click Here"/>
     <Card naam="Aman"  />
    </>
  )
}

export default App
