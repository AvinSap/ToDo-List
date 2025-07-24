function Todo({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            margin: "0.5em 0",
          }}
        >
          <span onClick={() => onToggle(todo.id)} style={{ cursor: "pointer" }}>
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            style={{ marginLeft: "1em" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
