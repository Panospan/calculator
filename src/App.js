import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { ClearButton } from './components/ClearButton';
import Input from './components/Input';
import * as math from 'mathjs';

function App() {
  const [input,setInput] = useState(0);
  const [previousInput,setPreviousInput] = useState("");

  const addToInput = (val) =>{
    input === 0 ? setInput( val) : setInput( input + val);
  }

  const handleEqual = () =>{
    setPreviousInput(input);
    setInput( math.evaluate(input));
  }
  
  return (
    <div className="app">
        <div className="calc-wrapper">
          <Input history={previousInput} input={input}> </Input>
          
          <div className="row">
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>/</Button>
          </div>

          <div className="row">
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <Button history={previousInput} handleClick={handleEqual}>=</Button>
            <Button handleClick={addToInput}>-</Button>
          </div>

          <div className="row">
            <ClearButton handleClear={ () => {setInput(0); setPreviousInput();} }>Clear</ClearButton>
          </div>
          
          
          
        </div>
    </div>
  );
}

export default App;
