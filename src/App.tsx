import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Mock the login process.
  const login = () => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve("Login Success!");
      }, 1000);
    });
  };

  return (
    <>
      <div>
        <a href="https://mywave.ai" target="_blank">
          <img
            src={
              "https://mywave.ai/wp-content/uploads/2022/10/mywave-logo-white.svg"
            }
            className="logo"
            alt="Company logo"
          />
        </a>
      </div>
      <LoginForm
        hidden={isLoggedIn}
        onSubmit={async () => {
          await login();
          setIsLoggedIn(true);
        }}
      />
      <div>{isLoggedIn ? <p>Welcome to MyWAVE.AI</p> : null}</div>
    </>
  );
}

export default App;
