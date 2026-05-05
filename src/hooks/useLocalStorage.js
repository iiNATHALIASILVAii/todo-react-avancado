import { useEffect, useState } from "react";

// Hook customizado para salvar e recuperar dados do localStorage.
// Ele recebe uma chave e um valor inicial.
export function useLocalStorage(key, initialValue) {
  // O useState recebe uma função para buscar o valor salvo apenas uma vez,
  // quando o componente é carregado pela primeira vez.
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      // Se existir algo salvo no localStorage, transformamos de JSON para JS.
      if (storedValue) {
        return JSON.parse(storedValue);
      }

      // Se não existir nada salvo, usamos o valor inicial.
      return initialValue;
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error);
      return initialValue;
    }
  });

  // Sempre que o valor mudar, salvamos novamente no localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Erro ao salvar dados no localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
}