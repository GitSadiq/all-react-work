import TextField from "@mui/material/TextField";
import { useState } from "react";

function SignUp(props) {
  const [formData, setFormData] = useState({});
  //   console.log(formData);

  props.userdata(formData);
  return (
    <div className="signup">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <br></br>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(event) =>
          setFormData({ ...formData, pass: event.target.value })
        }
      />
    </div>
  );
}

export default SignUp;
