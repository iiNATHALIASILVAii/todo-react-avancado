import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="app">
      <section className="todo-card">
        <header className="app-header">
          <span className="app-tag">React Avançado</span>

          <h1>To-Do List</h1>

        </header>

        <TodoForm />

        <TodoFilters />

        <TodoList />
      </section>
    </main>
  );
}

export default App;