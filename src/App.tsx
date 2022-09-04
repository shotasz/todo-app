import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { ITodo } from "./Interfaces";
import TodoList from "./TodoList";

// TODO: Please implement this component.
const App: FC = () => {
  const getId = Math.random().toString(12).substring(2);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (!todos) return;
  }, [todos]);

  const addTodo = (): void => {
    const newTodo = { id: getId, input: input };
    if (newTodo.input === "") return;
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2 className="App-logo">TODO App</h2>
        <div className="App-content">
          {todos.map((todo, idx) => (
            <TodoList
              key={idx}
              todo={todo}
              idx={idx}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
        <div className="App-input">
          <input
            className="App-text"
            type="text"
            name="text"
            placeholder="ToDoを入力"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="App-button" onClick={addTodo}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
