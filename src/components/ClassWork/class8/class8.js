import { useState } from 'react';
import './App.css';
import Custombutton from '../../CustomButton/button';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';

// login and signup from screen 
//custom button from component 

function App() {
  const [Button, setButton] = useState("SignUp")

  const ChangeCondition = () => {
    if (Button === "SignUp") {
      setButton("login")
    }
    else {
      setButton("SignUp")
    }
  }

  // const [name, setName] = useState('SignUp yes')
  // const [screen, setScreen] = useState('signup')
  // const [condition, setCondtion] = useState(false)

  return (
    <div className="App-header">

      {Button === "login" &&
        <Login />}
      {Button === "SignUp" &&
        <SignUp />}

      <Custombutton click={ChangeCondition} Name={Button} />

      {/* {
        screen === 'signup' &&
        <SignUp name={screen} setScreen={setScreen} />
      }
      {
        screen === 'login' &&
        <Login name={screen} setScreen={setScreen} />
      } */}
    </div >
  );
}

export default App;
