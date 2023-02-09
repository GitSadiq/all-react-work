import { useState } from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState([
    { text: "Sadiq", isComplete: "Uncomplete", Status: false },
    { text: "Hasan", isComplete: "Uncomplete", Status: false }
  ])
  const [getInputValue, setInputValue] = useState({})

  const [editStatus, setEditStatus] = useState(true)
  const [editIndex, setEditIndex] = useState()

  const eventHandler = (e) => {
    setInputValue({ text: e.target.value, isComplete: "Uncomplete", Status: false })
  }

  const addItem = () => {
    console.log(getInputValue)
    const updatedArray = [...inputArray]
    updatedArray.push(getInputValue)
    setInputArray(updatedArray)
    setInputValue({ text: "", isComplete: "Uncomplete", Status: false })
  }

  const editItem = (index) => {
    let valueEditItem = inputArray[index].text
    setInputValue({ text: valueEditItem, isComplete: "Uncomplete", Status: false })
    setEditIndex(index)
    setEditStatus(false)
  }

  const updateItem = () => {
    const updatedArray = [...inputArray]
    updatedArray[editIndex].text = getInputValue.text
    setInputArray(updatedArray)
    // console.log(updatedArray[editIndex].text)
    setInputValue({ text: "", isComplete: "Uncomplete", Status: false })
  }

  const deleteItem = (index) => {
    let updatedArray = [...inputArray]
    updatedArray.splice(index, 1)
    setInputArray(updatedArray)
  }

  const isComplete = (index) => {
    let updatedArray = [...inputArray]
    updatedArray[index].isComplete = "complete"
    console.log(updatedArray[index])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App-header">
      <form onSubmit={handleSubmit}>
        <input type={"text"} onChange={eventHandler} value={getInputValue.text} id="input">
        </input>
        {
          editStatus ?
            <button onClick={addItem}>
              add
            </button>
            :
            <button onClick={updateItem}>
              update
            </button>
        }

      </form>
      {inputArray.map((item, index) => {
        return (
          <span className='row'>
            <div className={item.isComplete} onClick={() => isComplete(index)}>{item.text}</div>
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </span>
        )
      })

      }

    </div>
  );
}

export default App;
