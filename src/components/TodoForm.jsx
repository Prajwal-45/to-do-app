import React, { useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import "../App.css";

export default function TodoForm() {
  const [text, setText] = useState("");
  const [todoWork, setTodoWork] = useState([]);
  const [dateTime,setDateTime]=useState("");
  const setValue = (value) => {
    setText(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
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
    setText("");
    
  };

  setInterval(()=>{
  const date=new Date();
  const formattedDate=date.toLocaleDateString();
  const formattedTime=date.toLocaleTimeString();
  setDateTime(`${formattedDate} - ${formattedTime}`);

  },1000)

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <h4>{dateTime}</h4>
     
      
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

        <section>
          <ul>
           {
            todoWork.map((currentValue,key)=>{
              return(
                <li key={key}>
                  <div>
                    
                  <span><b>{currentValue}</b></span>
                  </div>
                  <div className="IconsProperty">
                  <MdCheckCircleOutline className="check"/>
                  <MdDeleteForever className="delete"/>
                  </div>
                </li>
              )
            })


           }
        </ul>
       
      </section>
    </>
  );
}
