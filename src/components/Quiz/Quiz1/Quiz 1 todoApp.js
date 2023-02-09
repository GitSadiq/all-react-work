import { upload } from '@testing-library/user-event/dist/upload';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState([
    { text: "Quiz Create ToDoApp", isComplete: "Uncomplete", strickStatus: true },
    { text: "Sunday Class", isComplete: "Uncomplete", strickStatus: true }
  ])

  const [getInputValue, setInputValue] = useState({})

  const [editIndex, setEditIndex] = useState()

  const [editStatus, setEditStatus] = useState(true)

  const eventHandler = (e) => {
    setInputValue({ text: e.target.value, isComplete: "Uncomplete", strickStatus: true })
  }

  const addItem = () => {
    const updateArray = [...inputArray]
    updateArray.push(getInputValue)
    setInputArray(updateArray)
    setInputValue({ text: "", isComplete: "Uncomplete", strickStatus: true })
  }

  const deleteItem = (index) => {
    const updateArray = [...inputArray]
    updateArray.splice(index, 1)
    setInputArray(updateArray)
  }

  const editItem = (index) => {
    const updateArray = [...inputArray]
    let updateValue = updateArray[index].text
    setInputValue({ text: updateValue, isComplete: "Uncomplete", strickStatus: true })
    setEditIndex(index)
    setEditStatus(false)
  }

  const updateItem = () => {
    const updateArray = [...inputArray]
    updateArray.splice(editIndex, 1, getInputValue)
    setInputArray(updateArray)
    setEditStatus(true)
    setInputValue({ text: "", isComplete: "Uncomplete", strickStatus: true })
  }

  const changeClass = (index) => {
    const updateArray = [...inputArray]
    let currentValue = updateArray[index].text
    if (updateArray[index].strickStatus)
      updateArray.splice(index, 1, { text: currentValue, isComplete: "complete", strickStatus: false })
    else (
      updateArray.splice(index, 1, { text: currentValue, isComplete: "Uncomplete", strickStatus: true })
    )

    setInputArray(updateArray)

  }

  const submitEvent = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App-header">
      <form onSubmit={submitEvent}>
        <input onChange={eventHandler} value={getInputValue.text}></input>
        {
          editStatus ?
            <button onClick={addItem}>Add</button>
            :
            <button onClick={updateItem}>Edit</button>
        }

      </form>
      {inputArray.map((item, index) => {
        return (
          <div className='row'>
            <div className={item.isComplete} onClick={() => changeClass(index)}>{item.text}</div>
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        )
      })

      }
    </div >
  );
}

export default App;
