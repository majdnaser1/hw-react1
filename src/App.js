import { useState } from 'react';
import './App.css';

function App() {

const [number1, setNumber1]=useState(0);
const [number2, setNumber2]=useState(0);
const [add, setAdd]=useState(number1+number2);
const [subtract,SetSubtract]=useState(number1 - number2);
const [multiplied ,setMultiplied]=useState(number1*number2);
const [divided,setDivided]=useState(number1 / number2);
const [num,setNum]=useState(number1 % number2);




function addNumber(){
setAdd(number1 + number2);
}

function subtractNumber(){
  SetSubtract(number1 - number2);
}

function multipliedNumber(){
setMultiplied(number1*number2);
}

function dividedNumber(){
setDivided(number1 / number2);

}

function number(){
  setNum(number1 % number2);
  
}

  return (
  <>
  <div className="App">

  <h1>Simple Calculator</h1>

  
  <div className='form-control'>
    <input 
    value={number1} 
    onChange={e => setNumber1( +e.target.value)} 
    />

    <input 
    value={number2} 
    onChange={e => setNumber2( +e.target.value)} 
    />

  </div>

<button onClick={addNumber}>+</button>
<button onClick={subtractNumber}>-</button>
<button onClick={multipliedNumber}>*</button>
<button onClick={dividedNumber}>/</button>
<button onClick={number}> % </button>

<div className='st'>
<h5>{add}{subtract}{multiplied}{divided}{num}</h5>
</div>
  </div>  
  </>);
}

export default App;