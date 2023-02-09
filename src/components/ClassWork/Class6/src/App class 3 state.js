import './App.css';
import {useState} from 'react' 

//Hooks
//React ke built in functions
//Use state Rerenders virtural DOM
function App() {
  // const [variable_name, variable_update_method]  
  // = useState(intial_value)
  const [stateName, setStateName] = useState(1)
  const [arr, setArr] = useState([1,2,3,4])
  let name = "expertizo"

  const changeName = () =>{
    name = "Expertizo University"
    console.log("function chala", name)
  }

  const changeNameState = () =>{
    setStateName("Nabeel Rizwan")
  }

  const changeNumberState = () =>{
    setStateName(stateName+1)
  }

  return <>
    <div className="App">
      <header className="App-header">
        <h1>{stateName}</h1>
        <h1>{arr}</h1>
        {/* <button
        onClick={changeNameState}
        >Change Name</button> */}
        <button
        onClick={changeNumberState}
        >Inc</button>
      </header>
    </div>
  </>
}
export default App;

//Types of components
//1. Functional Component
//2. Class component
