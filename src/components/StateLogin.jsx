import { useState } from "react";

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

  function handleSubmit(e) {
    e.preventDefault();
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(event) {
    switch (event.target.id) {
      case "email":
        setEnteredValues((prev) => ({
          ...prev,
          email: event.target.value,
        }));
        setDidEdited(prev => ({
          ...prev,
          email: false
        }))
        break;

      case "password":
        setEnteredValues((prev) => ({
          ...prev,
          password: event.target.value,
        }));
        setDidEdited(prev => ({
          ...prev,
          password: false
        }))
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={handleInputChange}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email adress.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
