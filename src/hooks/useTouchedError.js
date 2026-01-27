import { useState } from 'react';

export const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setTouched(false);
  }

  function handleInputBlur() {
    setTouched(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: touched && !valueIsValid,
  };
};
