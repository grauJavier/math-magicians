import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

function Calculator() {
  const [CURRENT_DATA, UPDATED_DATA] = useState({});

  function updateData(event) {
    const BUTTON_DATA = event.target.name;
    UPDATED_DATA(calculate(CURRENT_DATA, BUTTON_DATA));
  }

  function Button({ nameAndValue, className }) {
    return (
      <button type="button" name={nameAndValue} className={className} onClick={updateData}>
        {nameAndValue}
      </button>
    );
  }

  Button.propTypes = {
    nameAndValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  function Display({ innerData }) {
    return <div id="calculator__display">{innerData}</div>;
  }

  Display.propTypes = {
    innerData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  function UtilityPad() {
    const UTILITY_BUTTONS = ['AC', '+/-', '%'];
    const OUTPUT = [];

    for (let i = 0; i < UTILITY_BUTTONS.length; i += 1) {
      OUTPUT.push(<Button key={UTILITY_BUTTONS[i]} nameAndValue={UTILITY_BUTTONS[i]} className="calculator__grey-btn" />);
    }

    return OUTPUT;
  }

  function NumericPad() {
    const OUTPUT = [];
    const NUMERIC_PAD_ROWS = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, '.'],
    ];

    for (let row = 0; row < NUMERIC_PAD_ROWS.length; row += 1) {
      for (let number = 0; number < NUMERIC_PAD_ROWS[row].length; number += 1) {
        OUTPUT.push(<Button key={NUMERIC_PAD_ROWS[row][number]} nameAndValue={NUMERIC_PAD_ROWS[row][number]} className="calculator__grey-btn" />);
      }
    }

    return OUTPUT;
  }

  function OperatorsPad() {
    const OPERATOR_BUTTONS = ['÷', 'x', '+', '-', '='];
    const OUTPUT = [];

    for (let i = 0; i < OPERATOR_BUTTONS.length; i += 1) {
      OUTPUT.push(<Button key={OPERATOR_BUTTONS[i]} nameAndValue={OPERATOR_BUTTONS[i]} className="calculator__orange-btn" />);
    }

    return OUTPUT;
  }

  function resultBuilder() {
    if (!CURRENT_DATA.total) {
      CURRENT_DATA.total = '';
    }

    if (!CURRENT_DATA.operation) {
      CURRENT_DATA.operation = '';
    }

    if (!CURRENT_DATA.next) {
      CURRENT_DATA.next = '';
    }

    return CURRENT_DATA.total + CURRENT_DATA.operation + CURRENT_DATA.next;
  }

  const RESULT = resultBuilder();

  return (
    <div id="calculator" className="grid">
      <Display innerData={RESULT || 0} />
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
}

export default Calculator;
