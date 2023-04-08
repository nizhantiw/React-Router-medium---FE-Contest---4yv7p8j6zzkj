import React from "react";
import { useLocation } from "react-router-dom";

function Calculator() {
  const { search } = useLocation();
  const { num1, num2, op } = Object.fromEntries(
    new URLSearchParams(search)
  );

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    switch (op) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return n1 / n2;
      case "%":
        return n1 % n2;
      default:
        return NaN;
    }
  };

  return (
    <div>
      <p>Your calculation result is:</p>
      <span id="calc-result">{calculate()}</span>
    </div>
  );
}

export default Calculator;
