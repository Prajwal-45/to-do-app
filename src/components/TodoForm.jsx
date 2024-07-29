import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../App.css";

export default function TodoForm() {
  const [text, setText] = useState("");
  const [todoWork,setTodoWork]=useState([]);
  const setValue = (value) => {
    setText(value);
  };

  const handleOnSubmit=(event)=>{
    event.preventDefault();
    if (!text) return;
    if(todoWork.includes(text)){
        alert("Already Exits in the List");
        setText("");

    };
    setTodoWork((prevData)=>[...prevData,text]);
    setText("");
    
    
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div className="inputDiv">
            <input type="text" value={text} onChange={(e) => setValue(e.target.value)} />
            <button>Add Tasks</button>
          </div>
        </form>

        {
            todoWork.map((currentVal,key)=>
                <h5 key={key}>{currentVal} <RiDeleteBin6Line className="deleteIcon"/></h5>
            )

        }
        

   
      </section>
    </>
  );
}
