import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");
  const passRef = useRef(null);

  const passGenerator = useCallback(()=>{
    let pass="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let spChar = "!@#$%^&*(){}[]?`~><_-";
    if(numbers){
      str+=num;
    }
    if(char){
      str+=spChar;
    }
    for(let i=0;i<length;i++){
      let idx = Math.floor(Math.random()*str.length);
      pass+=str[idx];
    }
    setPass(pass);

  },[length,numbers,char,setPass]);

  const copyPass = ()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(3,20);
    window.navigator.clipboard.writeText(pass);
  }
  
  useEffect(passGenerator,[length,numbers,char,setPass,passGenerator])

  return (
    <>
      <div className='w-100 max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-3xl text-center my-3' >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-7'>
          <input type='text'
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly
            value={pass}
            ref={passRef}
          ></input>
          <button className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={8} max={100} value={length} className='cursor-pointer' 
            onChange={(e)=>{
              setLength(e.target.value)
            }}>
            </input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numbers} id='numberInput' onChange={()=>{
              setNumber((prev) => !prev);
            }}></input>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={char} id='numberInput' onChange={()=>{
              setChar((prev) => !prev);
            }}></input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
