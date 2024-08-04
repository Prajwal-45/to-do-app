import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import "../App.css";

export default function TodoListController({
  todoWork,
  onSingleDelete,
  onhandleChecked,
}) {
  return (
    <>
      <section>
        <ul>
          {todoWork.map((currentValue) => {
            return (
              <li key={currentValue.id}>
                <div>
                  <span
                    className={currentValue.checked ? "checked" : "Unchecked"}
                  >
                    <b>{currentValue.content}</b>
                  </span>
                </div>
                <div className="IconsProperty">
                  <MdCheckCircleOutline
                    className="check"
                    onClick={() => onhandleChecked(currentValue)}
                  />
                  <MdDeleteForever
                    className="delete"
                    onClick={() => onSingleDelete(currentValue.content)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
