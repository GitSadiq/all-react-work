import './App.css';
import { useState } from 'react'
//Hooks

function App() {

  const [todoList, setTodoList] = useState([
    {
      name: "Breakfast",
      completed: false
    },
    {
      name: "excersize",
      completed: false
    },
    {
      name: "sleep",
      completed: false
    }
  ])

  const [inputValue, setInputValue] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState()
  // console.log("inputValue", inputValue)

  const addTodoItem = () => {
    //Problems
    // setTodoList(inputValue)
    //1. Data type change ho rahi thi
    //2. Previous values were deleted
    // todoList.push(inputValue)

    //3. rendering not hapening 
    // copyTodoList.push(inputValue)
    // setTodoList(copyTodoList)

    //4. Copy by ref

    let copyTodoList = [...todoList]
    copyTodoList.push({name: inputValue})
    // todoList.push(inputValue)
    setTodoList(copyTodoList)

    setInputValue("")

    // setTodoList(inputValue)
    console.log(todoList)
  }

  const deleteTodoItem = (index) => {
    // console.log(index)
    let copyTodoList = [...todoList]
    copyTodoList.splice(index, 1)
    setTodoList(copyTodoList)
  }

  const startEditing = (index, item) => {
    setInputValue(item)
    setEditMode(true)
    setEditIndex(index)
  }

  const updateTodoList = () => {
    let copyTodoList = [...todoList]
    copyTodoList[editIndex].name = inputValue
    setTodoList(copyTodoList)
    setInputValue("")
    setEditMode(false)
  }

  const completedFunction = (index)=>{
    console.log(index)
    let copyTodoList = [...todoList]
    copyTodoList[index].completed = !copyTodoList[index].completed
    setTodoList(copyTodoList)
  }

  return <>
    <div className="App">
      <header className="App-header">
        {inputValue}
        <input
          value={inputValue}
          placeholder='Enter an item'
          onChange={(event) => {
            // console.log("event", event.target.value)
            setInputValue(event.target.value)
          }}
        ></input>
        {
          editMode ?
            <button
              onClick={updateTodoList}
            >
              Update
            </button>
            :
            <button
              onClick={addTodoItem}
            >ADD</button>
        }
        {todoList.map((item, index) => {
          return <div key={index}>
            {/* <div style={ {textDecoration: editMode && 'line-through'}}
            onClick={() => console.log("click")}
            >
              {index + 1}) {item.name}
            </div> */}
            {
              item.completed ?
                <div style={{ textDecoration: 'line-through' }}
                  onClick={() => completedFunction(index)}
                >
                  {index + 1}) {item.name}
                </div>
                :
                <div
                  onClick={() => completedFunction(index)}
                >
                  {index + 1}) {item.name}
                </div>
            }
            <button
              onClick={() => deleteTodoItem(index)
              }
            >DEL</button>
            <button
              onClick={() => startEditing(index, item.name)}
            >Edit</button>
          </div>
        })}
      </header>
    </div>
  </>
}
export default App;

//Step 1
// Input and button creation
//Step 2 
// state todo list render using map function
//Step 3
// Get value from input store in state update todolist
// state
//Step 4
//

//Update
//Step 1
//set value in input field
//step 2
// update button
//step 3
//need index