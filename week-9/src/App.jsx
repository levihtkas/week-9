import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [vi,setvi] = useState(false);

  useEffect(function(){
    setInterval(()=>setvi(function(vi){return !vi}),5000);
  },[])
  let counterVisible = vi;

  return (
    <>
      <div>
       {counterVisible ? <Counter></Counter>:null}
      </div>
      {/* <Counter></Counter> */}
     
    </>
  )
}

function Counter(){ //Component
  // let count =0;
  const [count,setCount] = useState(0);

  

  // setInterval(function(){
  //   setCount(count+1);
  // },1000)
  // guard the setinterval from rerendering
  useEffect(function(){
    setInterval(()=>setCount(function(count){return count+1}),1000);
  },[])
  function increaseCount(){ //function
    setCount(count+1);
  }

  function decreaseCount(){ //function
    setCount(count-1);
  }

  function resetCount(){ //function
    setCount(0);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Inc button</button>

    <button onClick={decreaseCount}>Dec button</button>

    <button onClick={resetCount}>Reset button</button>

  </div>
}

export default App
