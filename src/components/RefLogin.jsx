import { useRef, useState } from "react";

export default function RefLogin() {
  const [emailIsInvalid, setEmailIsInvalid] = useState();

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if(!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    console.log('sending HTTP request...');
    
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ref Based Login Component</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
