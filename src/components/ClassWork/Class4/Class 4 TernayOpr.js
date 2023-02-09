import { useState } from "react";
import "./App.css";

function App() {
  const [condition, setCondition] = useState(false);

  if (condition) console.log("if chala");
  else console.log("else chala");

  //Ternary operator
  //Condition ?(if) :(else)

  // condition == " " ? <div> condition is true </div> : <div> condition is false</div>

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* {
          condition == "login" ? <div> login </div> : <div>signup</div>
        } */}
          {condition ? <div> login </div> : <div>signup</div>}
        </header>
      </div>
    </>
  );
}

export default App;
