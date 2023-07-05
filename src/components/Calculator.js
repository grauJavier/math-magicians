import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ innerText, className }) => (
  <div id={`btn${innerText}`} className={className}>
    {innerText}
  </div>
);

Button.propTypes = {
  innerText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const Display = ({ innerText }) => (
  <div id="calculator__display">
    <p>{innerText}</p>
  </div>
);
Display.propTypes = {
  innerText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const UtilityPad = () => {
  const UTILITY_BUTTONS = ['AC', '+/-', '%'];
  const OUTPUT = [];

  for (let i = 0; i < UTILITY_BUTTONS.length; i += 1) {
    OUTPUT.push(<Button innerText={UTILITY_BUTTONS[i]} className="calculator__grey-btn" />);
  }

  return OUTPUT;
};

const NumericPad = () => {
  const OUTPUT = [];
  const NUMERIC_PAD_ROWS = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.'],
  ];

  for (let row = 0; row < NUMERIC_PAD_ROWS.length; row += 1) {
    for (let number = 0; number < NUMERIC_PAD_ROWS[row].length; number += 1) {
      OUTPUT.push(<Button innerText={NUMERIC_PAD_ROWS[row][number]} className="calculator__grey-btn" />);
    }
  }

  return OUTPUT;
};

const OperatorsPad = () => {
  const OPERATOR_BUTTONS = ['÷', 'x', '+', '-', '='];
  const OUTPUT = [];

  for (let i = 0; i < OPERATOR_BUTTONS.length; i += 1) {
    OUTPUT.push(<Button innerText={OPERATOR_BUTTONS[i]} className="calculator__orange-btn" />);
  }

  return OUTPUT;
};

const Calculator = () => (
  <div id="calculator" className="grid">
    <Display innerText="0" />
    <div id="calculator__keypad" className="grid">
      <div id="calculator__grey-btns-container" className="grid">
        <UtilityPad />
        <NumericPad />
      </div>
      <div id="calculator__orange-btns-container" className="grid">
        <OperatorsPad />
      </div>
    </div>
  </div>
);

export default Calculator;
