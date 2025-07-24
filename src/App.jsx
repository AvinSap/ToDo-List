import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/TodoForm.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle task completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>📝 My To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      {todos.length > 0 ? (
        <Todo todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      ) : (
        <p>No tasks yet. Add one above! 👆</p>
      )}
    </div>
  );
}

export default App;
