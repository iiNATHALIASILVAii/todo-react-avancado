import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

// React.memo ajuda a evitar renderizações desnecessárias da lista.
const TodoList = React.memo(function TodoList() {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <p className="empty-message">
        Nenhuma tarefa encontrada nesse filtro.
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;