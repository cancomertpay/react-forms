import { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import RefLogin from "./components/RefLogin.jsx";
import Signup from "./components/Signup.jsx";
import StateLogin from "./components/StateLogin.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const signupRef = useRef(null);
  const loginRef = useRef(null);

  const handleLogin = () => {
    if (showSignup) {
      setShowSignup(false);
    }
    setShowLogin((prev) => !prev);

    setTimeout(() => {
      if (loginRef.current) {
        loginRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSignup = () => {
    if (showLogin) {
      setShowLogin(false);
    }
    setShowSignup((prev) => !prev);

    setTimeout(() => {
      if (signupRef.current) {
        signupRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <Header />
      <article>
        <p>
          These are three examples of{" "}
          <span>how to work with forms using React</span>. The main goal here is
          to build the best user experince logic. I used three different
          methods, which you can see by clicking the buttons below. <br />{" "}
          <br /> The first and second examples are login forms. I created them
          separately using the <span>useState</span> and <span>useRef</span>{" "}
          hooks. (<i>To see their interfaces, click the login button below.</i>){" "}
          <br /> <br /> Third is a signup form. This one is a bit more complex
          than login forms, as you may know. I chose to use{" "}
          <span>FormData</span> (default browser method) instead of React hooks
          for this one, as it provides an easier and more dynamic approach when
          building complex forms. (
          <i>To see the interface, click the signup button.</i>)
          <hr />
          <a href="https://github.com/cancomertpay/react-forms" target="_blank">
            To review the source code, please visit my GitHub repository.
          </a>
        </p>
      </article>
      <div className="show-button">
        <div className="main-buttons">
          <button
            onClick={handleSignup}
            className="button button-flat show-button"
          >
            Signup
          </button>
          <button onClick={handleLogin} className="button show-button">
            Login
          </button>
        </div>
      </div>
      <main>
        {showLogin && (
          <div ref={loginRef}>
            <StateLogin />
            <RefLogin />
          </div>
        )}
        {showSignup && (
          <div ref={signupRef}>
            <Signup />
          </div>
        )}
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
