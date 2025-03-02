import { useState } from 'react'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5);

const increaseCounter = () => {
  if(Counter < 10){
    setCounter(Counter + 1);
  }
}
const decreaseCounter = () => {
  if(Counter > 0){
  setCounter(Counter - 1);
  }
}
  return (
    <>
     <h1>Hi Antu!</h1>
     <h3 className="text-2xl font-bold text-center text-red-500">This is a simple Counter project.</h3>     
     <h1>My Counter Value: {Counter}</h1>
      <button className="mr-4 text-red-950" onClick={increaseCounter}>+</button>
      <button className="ml-4" onClick={decreaseCounter}>-</button>
    </>
  )
}

export default App
