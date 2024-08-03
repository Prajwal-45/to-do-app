import React, { useEffect, useState } from "react";
import "../App.css";
import TodoForm from "./TodoForm";
import TodoListController from "./TodoListController";
import DateTimeController from "./DateTimeController";

export default function Todo() {
  const [text, setText] = useState("");
  const [todoWork, setTodoWork] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleOnSubmit = (text) => {
    if (!text) {
      alert("You must write something");
      return;
    }

    if (todoWork.includes(text)) {
      alert("Already Exits in the List");
      setText("");
      return;
    }
    setTodoWork((prevData) => [...prevData, text]);
  };

  const handleClearAll = () => {
    setTodoWork([]);
  };

  const handleSingleDelete = (currentValue) => {
    const updatedToDoWork = todoWork.filter((value) => value != currentValue);
    setTodoWork(updatedToDoWork);
  };

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <DateTimeController dateTime={dateTime} setDateTime={setDateTime} />
      <TodoForm onAddTodo={handleOnSubmit} setText={setText} text={text} />
      <TodoListController
        todoWork={todoWork}
        onSingleDelete={handleSingleDelete}
      />
      <button onClick={handleClearAll}>Clear All</button>
    </>
  );
}
