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
    
      {todoWork.length > 0 && (
        <table>
          <tr>
            <th className="tableHeading">Task</th>
            <th className="tableHeading">Created At</th>
            <th className="tableHeading">Action</th>
          </tr>

          {todoWork.map((currentValue) => {
            return (
              <tr key={currentValue.id} className="taskData">
                <td>
                  <span
                    className={currentValue.checked ? "checked" : "Unchecked"}
                  >
                    <b>{currentValue.content}</b>
                  </span>
                </td>
                <td>
                  <b>{currentValue.dateTime}</b>
                </td>
                <td className="IconsProperty">
                  <MdCheckCircleOutline
                    className="check"
                    onClick={() => onhandleChecked(currentValue)}
                  />
                  <MdDeleteForever
                    className="delete"
                    onClick={() => onSingleDelete(currentValue.content)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      )}
     
    </>
  );
}
