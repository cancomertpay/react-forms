import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdited, setDidEdited] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdited(false);
  }

  function handleInputBlur() {
    setDidEdited(true);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdited && !valueIsValid,
  };
}
