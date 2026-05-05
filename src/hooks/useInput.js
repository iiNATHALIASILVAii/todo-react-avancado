import { useState } from "react";

// Hook customizado para controlar campos de formulário.
// Ele guarda o valor digitado, atualiza o estado e também permite limpar o campo.
export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function clearInput() {
    setValue("");
  }

  return {
    value,
    onChange: handleChange,
    clearInput,
  };
}