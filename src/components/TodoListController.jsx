import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export default function TodoListController({ todoWork, onSingleDelete }) {
  return (
    <>
      <section>
        <ul>
          {todoWork.map((currentValue, key) => {
            return (
              <li key={key}>
                <div>
                  <span>
                    <b>{currentValue}</b>
                  </span>
                </div>
                <div className="IconsProperty">
                  <MdCheckCircleOutline className="check" />
                  <MdDeleteForever
                    className="delete"
                    onClick={() => onSingleDelete(currentValue)}
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
