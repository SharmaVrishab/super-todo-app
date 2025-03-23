import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  // logic
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodo] = useState([
    // { input: "Hello! Add your first todo!", complete: true },
  ]);
  // for tabs
  const [selectedTab, SetSelectedTab] = useState("ALL");

  function handleAddTodo(newtodo) {
    const newTodoList = [...todos, { input: newtodo, complete: false }];
    setTodo(newTodoList);
    handleSaveData(newTodoList);
  }
  // function handleCompleteTodo(index) {
  //   // update/edit/modify
  //   let newTodoList = [...todos];
  //   //  this is wrong as we are working the refrence here instaed use object
  //   // let completedTodo = todos[index];
  //   // completedTodo["complete"] = true;
  //   let completeTodo = { ...todos[index], complete: true };
  //   newTodoList[index] = completeTodo;
  //   setTodo(newTodoList);
  //   handleSaveData(newTodoList);
  // }
  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodo(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodo(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }
  useEffect(() => {
    if (!localStorage) {
      console.log("error");
      return;
    }
    if (!localStorage.getItem("todo-app")) {
      setTodo([]);
    }
    console.log("here");
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodo(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        SetSelectedTab={SetSelectedTab}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>

    // </div>
  );
}

export default App;
