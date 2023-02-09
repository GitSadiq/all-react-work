import TextField from "@mui/material/TextField";
import { useState } from "react";

function Login(props) {
  const [loginForm, setLoginForm] = useState({});

  props.logindata(loginForm);
  return (
    <div className="signup">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setLoginForm({ ...loginForm, email: e.target.value });
        }}
      />
      <br></br>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => {
          setLoginForm({ ...loginForm, pass: e.target.value });
        }}
      />
      {/* <Custombutton
                name={props.name}
                setScreen={props.setScreen}
                screen={'signup'}
                message={"Logged in"} /> */}
    </div>
  );
}

export default Login;
