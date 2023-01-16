import logo from './logo.svg';
import {useState} from 'react';

function Counter(){
  const[counter,setCounter]=useState(0);
  const increment = () =>{
    setCounter(counter+1)
  }
  const decrement = () =>{
    setCounter(counter-1)
  }
  const reset=() =>{
    setCounter(0)
  }
  return(
    <center>
    <div className='App'>
      <button onClick={increment}>+</button>

      <span className='result' style={{"margin":"25px"}}>{counter}</span>

      <button onClick={decrement}>-</button>

    <div className='reset'>
      <button onClick={reset}>
        <span>reset</span>
      </button>
    </div>
    </div>
    </center>
  );
}

export default Counter;