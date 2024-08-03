import React, { useState } from "react";

export default function TodoForm({ onAddTodo, setText, text }) {
  const setValue = (value) => {
    setText(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div className="inputDiv">
            <input
              type="text"
              value={text}
              onChange={(e) => setValue(e.target.value)}
            />
            <button>Add Tasks</button>
          </div>
        </form>
      </section>
    </>
  );
}
