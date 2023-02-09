import './App.css';
import { useState } from 'react'

//Hooks
//React ke built in functions
//Use state Rerenders virtural DOM
function App() {
  // const [variable_name, variable_update_method]  
  // = useState(intial_value)
  const [name_1, setStateName] = useState("nabeel")
  const [name_2, setStateName1] = useState("rizwan")
  const [name_3, setStateName3] = useState("furqan")

  const [condition, setCondtion] = useState("dontshow")

  const [condition_2, setCondtion_2] = useState(true)
  const changeState = () => {
    setCondtion("show")
    // condition = "show"
    setCondtion_2(!condition_2)
  }

  //first button intial value false
  //second time button value true

  return <>
    <div className="App">
      <header className="App-header">

        {condition == "dontshow" && <div>name_1name_1name_1name_1name_1name_1name_1name_1</div>}
        {condition == "show" && name_2}

        {condition_2 && name_3}

        <button
          onClick={changeState}
        >change state</button>
      </header>
    </div>
  </>
}
export default App;

//Types of components
//1. Functional Component
//2. Class component
