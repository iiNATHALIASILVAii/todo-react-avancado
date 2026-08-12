import { atom } from "recoil";

// Átomo responsável por armazenar globalmente a lista de tarefas.
export const todoListState = atom({
  key: "todoListState",

  default: [
    {
      id: "1",
      text: "Estudar Hooks em React",
      completed: false,
    },
    {
      id: "2",
      text: "Entender Recoil",
      completed: false,
    },
    {
      id: "3",
      text: "Criar seletores",
      completed: false,
    },
  ],
});

// Átomo responsável por armazenar o filtro atualmente selecionado.
// Os valores possíveis são: "all", "completed" e "pending".
export const todoFilterState = atom({
  key: "todoFilterState",
  default: "all",
});