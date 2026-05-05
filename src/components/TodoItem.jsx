import React from "react";
import { useTodos } from "../context/TodoContext";

// React.memo evita renderizar novamente um item se ele não mudou.
const TodoItem = React.memo(function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className="remove-button"
        onClick={() => removeTodo(todo.id)}
        aria-label={`Remover tarefa ${todo.text}`}
      >
        Remover
      </button>
    </li>
  );
});

export default TodoItem;