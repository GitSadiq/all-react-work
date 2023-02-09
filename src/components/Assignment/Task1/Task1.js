import { useState } from "react";
import "./Task1.css";

function Task1() {
  const [Condition, setCondition] = useState(true);
  const checkCondition = () => {
    setCondition(!Condition);
    console.log(Condition);
  };
  return (
    <div className="BodyOfForm">
      {Condition && (
        <div className="FormDiv">
          <div className="LoginFromTable">
            <div className="LoginRow">
              <div className="ParaForLoginForm">User Name</div>
              <div className="InputCol">
                <input
                  className="LoginFormInput"
                  type={"text"}
                  placeholder={"Sadiq"}
                ></input>
              </div>
            </div>
            <div className="LoginRow">
              <div className="ParaForLoginForm">Email Address</div>
              <div className="InputCol">
                <input
                  className="LoginFormInput"
                  type={"email"}
                  placeholder={"sadiqkhanach@gmail.com"}
                ></input>
              </div>
            </div>
            <div className="LoginRow">
              <div className="ParaForLoginForm">Create Password</div>
              <div className="InputCol">
                <input className="LoginFormInput" type={"password"}></input>
              </div>
            </div>
            <div className="LoginRow">
              <div className="ParaForLoginForm">Confirm Password</div>
              <div className="InputCol">
                <input className="LoginFormInput" type={"password"}></input>
              </div>
            </div>
            <div className="LoginRow">
              <button onClick={checkCondition}>Create Account</button>
            </div>
          </div>
        </div>
      )}
      {Condition || (
        <div className="FormDivLogin">
          <div className="LoginFromTable">
            <div className="LoginRow">
              <div className="ParaForLoginForm">Email Address</div>
              <div className="InputCol">
                <input
                  className="LoginFormInput"
                  type={"email"}
                  placeholder={"sadiqkhanach@gmail.com"}
                ></input>
              </div>
            </div>
            <div className="LoginRow">
              <div className="ParaForLoginForm">Password</div>
              <div className="InputCol">
                <input className="LoginFormInput" type={"password"}></input>
              </div>
            </div>
            <div className="LoginRow">
              <button onClick={checkCondition} className="Login">
                LogIn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task1;
