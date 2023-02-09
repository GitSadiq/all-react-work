import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./ToDoApp.css";
function AppToDo() {
  const [inputArray, setInputsArray] = useState([
    { text: "Learn React", Class: "listedDiv", status: false },
    { text: "Practice React", Class: "listedDiv", status: false },
    { text: "Code for ToDo App", Class: "listedDiv", status: false },
  ]);

  const [getInputValue, setInputValue] = useState({});

  // const [check, setCheck] = useState(true);

  const eventHandler = (e) => {
    // const InputValue = e.target.value;
    setInputValue({ text: e.target.value, Class: "listedDiv", status: false });
    // console.log(getInputValue);
  };

  const AddValue = () => {
    const currentInputValue = document.getElementById("input").value.trim();
    console.log(currentInputValue);
    if (currentInputValue !== "") {
      let copyInputArray = [...inputArray];
      copyInputArray.push(getInputValue);
      setInputsArray(copyInputArray);
      document.getElementById("input").value = "";
    } else alert("Can't list the empty items");
  };

  const isComplete = (e, index) => {
    // const updatedArray = inputArray.filter((_, i) => i == index);
    // setInputsArray(updatedArray);
    // console.log(updatedArray);
    const check = e.target.checked;
    const updatedArray = [...inputArray];
    if (!check) {
      updatedArray[index].Class = "listedDiv";
    } else {
      updatedArray[index].Class = "completed";
    }
    updatedArray[index].status = check;
    setInputsArray(updatedArray);
  };

  const deleteItem = (index) => {
    const updatedArray = [...inputArray];
    updatedArray.splice(index, 1);
    setInputsArray(updatedArray);
    // console.log(inputArray);
  };

  const edit = (index) => {
    const correctedtext = prompt(
      "Correct on listed task",
      inputArray[index].text
    );
    const updatedArray = [...inputArray];
    updatedArray.splice(index, 1, {
      text: correctedtext,
      Class: "listedDiv",
      status: false,
    });
    setInputsArray(updatedArray);
  };

  const deleteAll = () => {
    setInputsArray([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs.username, inputs.age);
  };

  return (
    <div className="App-header">
      <h1>React To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={eventHandler} id="input"></input>
        <button onClick={AddValue}>
          <i class="fa-solid fa-square-plus"></i>
        </button>
        <button onClick={deleteAll}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </form>
      {inputArray.map((item, index) => {
        return (
          <div className="row">
            <div className={item.Class}>
              <input
                checked={item.status}
                type={"checkbox"}
                className="CheckBox"
                onClick={(e) => {
                  isComplete(e, index);
                }}
              />
              <span className="listedItem">{item.text}</span>
            </div>
            <button
              onClick={() => {
                edit(index);
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => {
                deleteItem(index);
              }}
            >
              <i class="fa-solid fa-delete-left"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default AppToDo;
