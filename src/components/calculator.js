/* eslint-disable */
import Zero from './zero.js'

function Calculator() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">0</div>
        </div>
        <button>AC</button>
        <button >+/-</button>
        <button>%</button>
        <button className="orange-button">+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="orange-button">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="orange-button">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="orange-button">+</button>
        <Zero />
        <button>.</button>
        <button className="orange-button">=</button>
      </div>
    );
  }

  export default Calculator;