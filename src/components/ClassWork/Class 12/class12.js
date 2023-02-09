import { useEffect, useState } from "react";
import "./class 12th.css";
import Custombutton from "../../CustomButton/button";
import Login from "../../../screens/login";
import SignUp from "../../../screens/signup";
import { userSignUp, userSignIn, auth } from "../../../config/firebase C12";
import swal from "sweetalert";
import { onAuthStateChanged } from "firebase/auth";
import DashBoard from "./deshboard";


function App() {
  const [Button, setButton] = useState("login");
  const [data, setData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [userdata, setUserData] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user hai", uid)
        setUserData(uid)
      } else {
        setUserData()
        console.log("user nh hai")
      }
    });
  }, [])

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
        // console.log("user id tw mil gai", result.uid)
        setButton("deshboard");
        setUserData(result.uid)
        swal("Success!",
          result.message,
          "success");

      }
    }
  };

  return (
    <div className="App-header">
      {Button === "login" && <Login logindata={setLoginData} />}
      {Button === "SignUp" && <SignUp userdata={setData} />}
      {(Button === "login" || Button === "SignUp") && < Custombutton click={ChangeCondition} Name={Button} />}
      {Button === "deshboard" && <DashBoard setUserData={setUserData} uid={userdata} />}
    </div>
  );
}

export default App;

// Login/SignUp page (from screens folder) with connection firebase (fromConfigFolder) as backend
//
