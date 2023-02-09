import { useState } from "react";
import "./class 10th.css";
import Custombutton from "../../CustomButton/button";
import Login from "../../../screens/login";
import SignUp from "../../../screens/signup";
import { userSignUp, userSignIn } from "../../../config/firebase";
import swal from "sweetalert";

function App() {
  const [Button, setButton] = useState("SignUp");
  const [data, setData] = useState({});
  const [loginData, setLoginData] = useState({});

  // const ChangeCondition = () => {
  //   if (Button === "SignUp") {
  //     setButton("login");
  //     userSignUp(data);
  //   } else {
  //     setButton("alert");
  //     userSignIn(loginData);
  //   }
  // };

  const ChangeCondition = async () => {
    if (Button === "SignUp") {
      const result = await userSignUp(data);
      if (result.error) {
        swal("ERROR!",
          result.message,
          "error");
      }
      else {
        swal("Success!",
          result.message,
          "success");
        setButton("login");
      }
    } else {

      const result = await userSignIn(loginData);
      if (result.error) {
        swal("ERROR!",
          result.message,
          "error");
      }
      else {
        swal("Success!",
          result.message,
          "success");
        setButton("deshboard");
      }
    }
  };

  // const [name, setName] = useState('SignUp yes')
  // const [screen, setScreen] = useState('signup')
  // const [condition, setCondtion] = useState(false)

  return (
    <div className="App-header">
      {Button === "login" && <Login logindata={setLoginData} />}
      {Button === "SignUp" && <SignUp userdata={setData} />}
      <Custombutton click={ChangeCondition} Name={Button} />

      {/* {
        screen === 'signup' &&
        <SignUp name={screen} setScreen={setScreen} />
      }
      {
        screen === 'login' &&
        <Login name={screen} setScreen={setScreen} />
      } */}
    </div>
  );
}

export default App;

// Login/SignUp page (from screens folder) with connection firebase (fromConfigFolder) as backend
//
