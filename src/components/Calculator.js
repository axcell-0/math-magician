import React from 'react';
import CalculatorButton from './CalculatorButton';

function Calculator() {
  return (
    <div className="mx-auto overflow-hidden mt-10 mb-2 bg-[#a4a4a4] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="p-5 text-white text-right text-3xl bg-[#515151]">
          <span className="text-white-500">
            0
          </span>
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          <CalculatorButton text="AC" name="AC" color="bg-gray-800" />
          <CalculatorButton text="+/-" name="+/-" color="bg-gray-800" />
          <CalculatorButton text="%" name="%" color="bg-gray-800" />
          <CalculatorButton text="÷" name="/" color="bg-orange-500" />
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          <CalculatorButton text="7" name="7" color="bg-gray-800" />
          <CalculatorButton text="8" name="8" color="bg-gray-800" />
          <CalculatorButton text="9" name="9" color="bg-gray-800" />
          <CalculatorButton text="x" name="*" color="bg-orange-500" />
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          <CalculatorButton text="4" name="4" color="bg-gray-800" />
          <CalculatorButton text="5" name="5" color="bg-gray-800" />
          <CalculatorButton text="6" name="6" color="bg-gray-800" />
          <CalculatorButton text="-" name="-" color="bg-orange-500" />
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          <CalculatorButton text="1" name="1" color="bg-gray-800" />
          <CalculatorButton text="2" name="2" color="bg-gray-800" />
          <CalculatorButton text="3" name="3" color="bg-gray-800" />
          <CalculatorButton text="+" name="+" color="bg-orange-500" />
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20 mb-4">
          <CalculatorButton text="0" name="0" color="bg-gray-800 w-52" />
          <CalculatorButton text="." name="." color="bg-gray-800" />
          <CalculatorButton text="=" name="=" color="bg-orange-500" />
        </div>

      </div>
    </div>
  );
}

export default Calculator;
