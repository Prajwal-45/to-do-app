import React, { useState } from "react";

export default function TodoForm({ onAddTodo, setText, text }) {
  const setValue = (value) => {
    setText({ id: value, content: value, checked: false });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAddTodo(text);
    setText({ id: "", content: "", checked: false });
  };

  return (
    <>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div className="inputDiv">
            <input
              type="text"
              value={text.content ? text.content : ""}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="inputTaskButton">Add Tasks</button>
          </div>
        </form>
      </section>
    </>
  );
}
