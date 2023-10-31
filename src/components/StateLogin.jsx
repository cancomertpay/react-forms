import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  // This form logic is preferred for key stroke validation-based.
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdited, setDidEdited] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdited.email && !enteredValues.email.includes("@");
  const passwordInvalid =
    didEdited.password && enteredValues.password.trim().length < 6;

  function handleSubmit(e) {
    e.preventDefault();
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(event) {
    switch (event.target.id) {
      case "stateemail":
        setEnteredValues((prev) => ({
          ...prev,
          email: event.target.value,
        }));
        setDidEdited((prev) => ({
          ...prev,
          email: false,
        }));
        break;

      case "statepassword":
        setEnteredValues((prev) => ({
          ...prev,
          password: event.target.value,
        }));
        setDidEdited((prev) => ({
          ...prev,
          password: false,
        }));
        break;
    }
  }

  function handleInputBlur(identifier) {
    setDidEdited((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>State Based Login Component</h2>
      <div className="control-row">
        <Input
          label={"Email"}
          id={"stateemail"}
          type="email"
          name="stateemail"
          onBlur={() => handleInputBlur("email")}
          onChange={handleInputChange}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        
        <Input
          label={"Password"}
          id={"statepassword"}
          type="password"
          name="statepassword"
          onChange={handleInputChange}
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
