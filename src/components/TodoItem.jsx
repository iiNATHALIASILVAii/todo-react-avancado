import React from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../atoms/todoAtoms";

// React.memo evita renderizar novamente um item se ele não mudou.
const TodoItem = React.memo(function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoListState);

  // Marca ou desmarca uma tarefa como concluída.
  function toggleTodo() {
    setTodos((currentTodos) =>
      currentTodos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? {
              ...currentTodo,
              completed: !currentTodo.completed,
            }
          : currentTodo
      )
    );
  }

  // Remove a tarefa selecionada.
  function removeTodo() {
    setTodos((currentTodos) =>
      currentTodos.filter(
        (currentTodo) =>
          currentTodo.id !== todo.id
      )
    );
  }

  return (
    <li
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
    >
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className="remove-button"
        onClick={removeTodo}
        aria-label={`Remover tarefa ${todo.text}`}
      >
        Remover
      </button>
    </li>
  );
});


export default TodoItem;