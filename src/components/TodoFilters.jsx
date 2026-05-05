import React from "react";
import { useTodos } from "../context/TodoContext";

// React.memo evita renderização desnecessária do componente
// quando as props/estados usados por ele não mudam.
const TodoFilters = React.memo(function TodoFilters() {
  const { filter, setFilter, todoStats } = useTodos();

  return (
    <section className="filters-area">
      <div className="stats">
        <span>Total: {todoStats.total}</span>
        <span>Concluídas: {todoStats.completed}</span>
        <span>Pendentes: {todoStats.pending}</span>
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Concluídas
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pendentes
        </button>
      </div>
    </section>
  );
});

export default TodoFilters;