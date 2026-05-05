import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Criamos o contexto.
// Ele será responsável por compartilhar as tarefas e funções entre os componentes.
const TodoContext = createContext();

// Lista inicial usada apenas se não existir nada salvo no localStorage.
const initialTodos = [
  {
    id: crypto.randomUUID(),
    text: "Estudar Hooks em React",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "Entender Context API",
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    text: "Criar hook customizado",
    completed: false,
  },
];

export function TodoProvider({ children }) {
  // Estado principal das tarefas.
  // Aqui usamos um hook customizado que salva e carrega os dados do localStorage.
  const [todos, setTodos] = useLocalStorage("todo-react-avancado", initialTodos);

  // Estado responsável por controlar o filtro atual.
  // Pode ser: "all", "completed" ou "pending".
  const [filter, setFilter] = useState("all");

  // Função para adicionar uma nova tarefa.
  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  // Função para marcar ou desmarcar uma tarefa como concluída.
  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  // Função para remover uma tarefa.
  function removeTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  // useMemo evita que a lista filtrada seja recalculada sem necessidade.
  // Ela só será recalculada quando "todos" ou "filter" mudarem.
  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  }, [todos, filter]);

  // Também usamos useMemo para calcular estatísticas da lista.
  // Isso evita cálculos repetidos a cada renderização.
  const todoStats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    return {
      total,
      completed,
      pending,
    };
  }, [todos]);

  // Esse objeto será compartilhado com todos os componentes filhos.
  const value = {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    todoStats,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// Hook personalizado para consumir o contexto.
// Assim os componentes não precisam importar useContext e TodoContext toda hora.
export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos deve ser usado dentro de um TodoProvider");
  }

  return context;
}