import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/calculatorStyle.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calculator-container">
      <h1>Let&apos;s do some math!</h1>
      <div className="calculator-grid">
        <div className="output">{state.next || state.operation || state.total}</div>
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" onClick={() => handleClick('÷')} className="orange-button">÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" onClick={() => handleClick('x')} className="orange-button">x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" onClick={() => handleClick('-')} className="orange-button">-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" onClick={() => handleClick('+')} className="orange-button">+</button>
        <button type="button" onClick={() => handleClick('0')} className="span-two">0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" onClick={() => handleClick('=')} className="orange-button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
