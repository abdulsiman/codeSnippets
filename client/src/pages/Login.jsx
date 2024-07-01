import React from "react";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";

// Refer for login pages and signup pages:https://www.chromium.org/developers/design-documents/create-amazing-password-forms/

function Login() {
  const [User, setUser] = useState(null);
  const [Pass, setPass] = useState(null);
  const [Error, setError] = useState(null);
  const errorParaRef = useRef(null);
  const navigate = useNavigate(); // Hooks can only be called inside the body of functions

  const handleInput = (e) => {
    // console.log(e.target.value);
    setUser(e.target.value);
  };
  const handleInputPass = (e) => {
    // console.log(e.target.value);
    setPass(e.target.value);
  };

  const handleRegister = (e) => {
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Add a <form> around your inputs with a <button type="submit"> inside. It will call your <form onSubmit> event handler. By default, the browser will send the form data to the current URL and refresh the page. You can override that behavior by calling e.preventDefault()
    console.log("Form submitted!");
    // When u want this api to work, put the ip address of laptop when hosting
    // NOTE: I have used a different port for requesting server is because at 5173 port laptop is serving react files

    await fetch("http://localhost:5174/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      //We need to convert js object into JSON string to pass over
      body: JSON.stringify({
        username: User,
        password: Pass,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleAuth(data);
      });
  };

  const handleAuth = (authToken) => {
    if (authToken.login_status_code === 9999) {
      navigate("/snippets");
    } else if (authToken.login_status_code === 1111) {
      console.log("Wrong authorisation details!");
      // console.log(errorParaRef.current);
      errorParaRef.current.id = "floating-errorMsg";
      errorParaRef.current.textContent = "Wrong username or password!";
    } else if (authToken.login_status_code === 8888) {
      console.log("Wrong authorisation details!");
      errorParaRef.current.id = "floating-errorMsg";
      errorParaRef.current.textContent = "Wrong username or password!";
    } else {
      console.log("Wrong authorisation details!");
      errorParaRef.current.id = "floating-errorMsg";
      errorParaRef.current.textContent = "Unexpected Error!";
    }
  };

  return (
    <>
      <Navbar animation={false} />
      <div id="login-page">
        <div className="login-svg">
          <BsDatabaseCheck size={350} color="#04e762" />
          {/* <FaServer size={70} /> */}
        </div>

        <div className="login-content">
          <h2>Login</h2>
          <p ref={errorParaRef}></p>
          <div className="form-div">
            {/* //**********************************************************/}
            <form onSubmit={handleSubmit}>
              <div className="login-inputs">
                <div className="input-div">
                  <FaUser size={30} color="aqua" />
                  {/* **************INPUT************************ */}

                  <input
                    type="text"
                    autoComplete="username"
                    placeholder="username"
                    maxLength={10}
                    minLength={4}
                    name="username"
                    onChange={handleInput}
                  />
                  {/* **************INPUT************************ */}
                </div>
                <div className="input-div">
                  <RiLockPasswordFill size={30} color="red" />
                  <input
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                    maxLength={10}
                    minLength={8}
                    name="UserPass"
                    onChange={handleInputPass}
                  />
                </div>
              </div>
              <div className="login-btns">
                <button type="submit">Login</button>
                <button type="button" onClick={handleRegister}>
                  Register
                </button>
              </div>
              <div className="company">
                <FaGithub size={27} />
                <FaFacebook size={27} />
                <FaGoogle size={27} />
                <FaReact size={27} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
