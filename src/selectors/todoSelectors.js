import { selector } from "recoil";
import {
  todoListState,
  todoFilterState,
} from "../atoms/todoAtoms";

// Selector responsável por retornar as tarefas
// conforme o filtro atualmente selecionado
export const filteredTodoListState = selector({
  key: "filteredTodoListState",

  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(todoFilterState);

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  },
});

// Selector responsável por calcular as estatísticas da interface.
export const todoStatsState = selector({
  key: "todoStatsState",

  get: ({ get }) => {
    const todos = get(todoListState);

    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    return {
      total,
      completed,
      pending,
    };
  },
});