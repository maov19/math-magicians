/* eslint-disable */

import React, { useState } from 'react';
import Big from 'big.js';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null
  });

  const handleClick = buttonName => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calculator-grid">
      <div className="output">{state.next || state.total}</div>
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
        <button type="button" onClick={() => handleClick('.')} >.</button>
        <button type="button" onClick={() => handleClick('=')} >=</button>
    </div>
    );
  }

  export default Calculator;