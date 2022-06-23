import { useState } from "react";

export const useCounter = (initialValue = 20) => {
  const [ counter, setCounter ] = useState(initialValue);

  const onIncrement = (value = 1) => {
    setCounter((currentCounter) => currentCounter + value);
  };

  const onDecrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(c => c - value);
  };

  const onReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    onIncrement,
    onDecrement,
    onReset
  };
};
