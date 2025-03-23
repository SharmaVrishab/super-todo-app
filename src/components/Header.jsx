import React from "react";

export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTaskPlural = todosLength <= 1 ? "task" : "tasks";
  return (
    <header>
      <h1 className="text-gradient">
        you have a {todosLength} opened {isTaskPlural}
      </h1>
    </header>
  );
}
