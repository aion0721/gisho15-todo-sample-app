import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="input your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add Todo</button>
      <div>{todos.join(",")}</div>
    </>
  );
}

export default App;
