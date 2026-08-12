import { useSetRecoilState } from "recoil";

import { todoListState } from "../atoms/todoAtoms";
import { useInput } from "../hooks/useInput";

function TodoForm() {
  // Pegamos a função addTodo diretamente do contexto.
  const setTodos = useSetRecoilState(todoListState);

  // Usamos o hook customizado para controlar o input.
  const todoInput = useInput("");

  function handleSubmit(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    // Evita adicionar tarefa vazia.
    if (!taskText) {
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
    };

    // Adiciona a nova tarefa ao estado global.
    setTodos((currentTodos) => [
      ...currentTodos,
      newTodo,
    ]);

    todoInput.clearInput();
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={todoInput.value}
        onChange={todoInput.onChange}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;