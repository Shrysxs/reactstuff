import { useState } from 'react'
import './App.css'

function  App() {
  
  return (
    <>
    <Counter />
    </>
  )
  
}

function Counter() {
  const [count, setCount] = useState(0);

  return <div>
    {count}
    <Increase setCount={setCount} />
    <Decrease setCount={setCount} />
    </div>
}

function Decrease({setCount}) {

  function Decrease(){
     setCount (C => C - 1);
  }
  return <div>
    <button onClick={Decrease}>Decrease</button>
    </div>
}

function Increase({setCount}) {

  function Increase(){
    setCount (c => c + 1);
  }
  return <div>
    <button onClick={Increase}>Increase</button>
    </div>
}

export default App