import { useTodos } from "../context/TodoContext";
import { useInput } from "../hooks/useInput";

function TodoForm() {
  // Pegamos a função addTodo diretamente do contexto.
  const { addTodo } = useTodos();

  // Usamos o hook customizado para controlar o input.
  const todoInput = useInput("");

  function handleSubmit(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    // Evita adicionar tarefa vazia.
    if (!taskText) {
      return;
    }

    addTodo(taskText);

    // Depois de adicionar, limpamos o campo.
    todoInput.clearInput();
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={todoInput.value}
        onChange={todoInput.onChange}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;