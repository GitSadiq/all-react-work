import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [inputValue, setInputValue] = useState("");
  // console.log("inputValue", inputValue);
  // console.log(typeof inputValue);

  const addTodoItem = () => {
    //step 2
    // todoList.push(inputValue);

    //step 3
    let copyTodoList = [...todoList];
    copyTodoList.push(inputValue);
    setTodoList(copyTodoList);

    // setTodoList(inputValue)
    console.log(todoList);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* {inputValue} */}
          <input
            placeholder="Enter an item"
            onChange={(event) => {
              // console.log("event", event.target.value);
              setInputValue(event.target.value);
              // setTodoList(event.target.value);
            }}
          ></input>
          <button onClick={addTodoItem}>ADD</button>
          {todoList.map((item, index) => {
            return (
              <div key={index}>
                {index + 1}) {item}
              </div>
            );
          })}
        </header>
      </div>
    </>
  );
}
export default App;

//Ternary operator
//spread operator ...

//problem 1 direcct value ko store kerwane pe
//datatype string horahi thi
//problem 2
//previous value removed only input value present
// problem 3
//
//problem 4

//Step#1 First take the value from input "onChange is the to attribute which have event function to get the value"
//step#2 Set this value to the new created state and then push to the previous state. Problem is that it can't redenering by click on the button because onchange render when change is occur.
//Step#3 Create new array through copy by value through spread oprator because create array copy by reference didn't work.
//Step#4 push the value to copied array and set it to the main array.
