import React, { Dispatch, SetStateAction } from "react";
import "./TodoList.css";
import { ITodo } from "./Interfaces";

interface IProps {
  todo: ITodo;
  idx: number;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoList = ({ todo, idx, todos, setTodos }: IProps) => {
  const removeTodo = (id: string) => {
    const values = [...todos];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setTodos(values);
  };

  return (
    <div className="Todo">
      <div className="List">
        <span className="List-header">{`Task ${idx + 1}`}</span>
        <p className="List-content">{todo.input}</p>
      </div>
      <div className="Buttons">
        {todos.slice(-1)[0] ? (
          <>
            <div>
              <button onClick={() => removeTodo(todo.id)} type="button">
                削除
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoList;
