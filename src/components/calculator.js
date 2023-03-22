import Zero from './zero';

function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">0</div>
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="orange-button">+</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="orange-button">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="orange-button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="orange-button">+</button>
      <Zero />
      <button type="button">.</button>
      <button type="button" className="orange-button">=</button>
    </div>
  );
}

export default Calculator;
