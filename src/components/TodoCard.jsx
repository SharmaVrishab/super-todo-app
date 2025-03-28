import React from "react";

export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  //   const todo = todos[todoIndex];
  //   console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>DONE</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>DELETE</h6>
        </button>
      </div>
    </div>
  );
}
