import React from 'react';
import PropTypes from 'prop-types';

const GreyButton = ({ innerText }) => <div id={`btn${innerText}`} className="calculator__grey-btn">{innerText}</div>;
GreyButton.propTypes = {
  innerText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const OrangeButton = ({ innerText }) => <div id={`btn${innerText}`} className="calculator__orange-btn">{innerText}</div>;
OrangeButton.propTypes = {
  innerText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    OUTPUT.push(<GreyButton key={i} innerText={UTILITY_BUTTONS[i]} />);
  }

  return OUTPUT;
};

const NumericPad = () => {
  const OUTPUT = [];
  let highestNumber = 9;

  for (let i = 1; i <= 3; i += 1) {
    for (let int = highestNumber - 2; int <= highestNumber; int += 1) {
      OUTPUT.push(<GreyButton key={int} innerText={int} />);
    }
    highestNumber -= 3;
  }

  OUTPUT.push(<GreyButton key="0" innerText={0} />);
  OUTPUT.push(<GreyButton key="decimal" innerText="." />);

  return OUTPUT;
};

const OperatorsPad = () => {
  const OPERATOR_BUTTONS = ['÷', 'x', '+', '-', '='];
  const OUTPUT = [];

  for (let i = 0; i < OPERATOR_BUTTONS.length; i += 1) {
    OUTPUT.push(<OrangeButton key={i} innerText={OPERATOR_BUTTONS[i]} />);
  }

  return OUTPUT;
};

const Calculator = () => (
  <div id="calculator">
    <Display innerText="0" />
    <div id="calculator__keypad">
      <div id="calculator__grey-btns-container">
        <UtilityPad />
        <NumericPad />
      </div>
      <div id="calculator__orange-btns-container">
        <OperatorsPad />
      </div>
    </div>
  </div>
);

export default Calculator;
