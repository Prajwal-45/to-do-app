import React, { useState } from "react";
import "../App.css";
import TodoForm from "./TodoForm";
import TodoListController from "./TodoListController";
import DateTimeController from "./DateTimeController";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "./LocalDataStorageController";

export default function Todo() {
  const [text, setText] = useState({});
  const [todoWork, setTodoWork] = useState(() => getLocalStorageData());
  const [dateTime, setDateTime] = useState("");

  const handleOnSubmit = (text) => {
    const { id, content, checked } = text;
    if (!content) {
      alert("You must write something");
      return;
    }

    const ifContentMatched = todoWork.find(
      (todoWork) => todoWork.content === content
    );
    if (ifContentMatched) {
      alert("Already exists in the list");
      return;
    }
    setTodoWork((prevData) =>
      [...prevData, { id, content, checked }].reverse()
    );
  };

  setLocalStorageData(todoWork);

  const handleSingleDelete = (currentValue) => {
    const updatedToDoWork = todoWork.filter(
      (value) => value.content != currentValue
    );
    setTodoWork(updatedToDoWork);
  };
  const handleClearAll = () => {
    setTodoWork([]);
  };

  const onhandleChecked = (value) => {
    const updatedToDoWork = todoWork.map((currentValue) => {
      if (currentValue.content === value.content) {
        return { ...currentValue, checked: !currentValue.checked };
      } else {
        return currentValue;
      }
    });
    setTodoWork(updatedToDoWork);
  };

  return (
    <>
      <div className="toDoApp">
        <header>
          <h1>Todo List</h1>
        </header>
        <DateTimeController dateTime={dateTime} setDateTime={setDateTime} />
        <TodoForm onAddTodo={handleOnSubmit} setText={setText} text={text} />
        <TodoListController
          todoWork={todoWork}
          onSingleDelete={handleSingleDelete}
          onhandleChecked={onhandleChecked}
        />
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </>
  );
}
