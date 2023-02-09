import './App.css';
import { useState } from 'react'

function App() {

  const [todoList, setTodoList] = useState([
    "Breakfast", "excersize", "sleep"
  ])

  const [inputValue, setInputValue] = useState("")
  // console.log("inputValue", inputValue)

  const addTodoItem = () => {
    let copyTodoList = [...todoList]
    copyTodoList.push(inputValue)
    // todoList.push(inputValue)
    setTodoList(copyTodoList)

    // setTodoList(inputValue)
    console.log(todoList)
  }

  return <>
    <div className="App">
      <header className="App-header">
        {inputValue}
        <input
          placeholder='Enter an item'
          onChange={(event) => {
            // console.log("event", event.target.value)
            setInputValue(event.target.value)
          }}
        ></input>
        <button
          onClick={addTodoItem}
        >ADD</button>
        {todoList.map((item, index) => {
          return <div key={index}>
            {index + 1}) {item}
          </div>
        })}
      </header>
    </div>
  </>
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