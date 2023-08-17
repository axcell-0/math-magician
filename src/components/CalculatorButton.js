import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({
  text, name, color, style,
}) {
  return (
    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button
        type="button"
        className={`rounded-full h-12 w-20 flex items-center ${color} justify-center shadow-lg hover:border-gray-500 focus:outline-none ${style}`}
        name={name}
      >
        {text}
      </button>
    </div>
  );
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default CalculatorButton;
