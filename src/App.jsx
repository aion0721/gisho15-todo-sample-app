import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="input your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
    </>
  );
}

export default App;
