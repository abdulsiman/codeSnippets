import React from "react";
import { SiKalilinux, SiArchlinux, SiParrotsecurity } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password: "",
    renter_password: "",
  });
  const errorMSGRef = useRef(null);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setSignUpDetails({
      ...signUpDetails,
      username: e.target.value,
    });
  };
  const handleInputPass = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      password: e.target.value,
    });
  };
  const handleInputPassRe = (e) => {
    // console.log(e.target.value);
    setSignUpDetails({
      ...signUpDetails,
      renter_password: e.target.value,
    });
  };

  function validator() {
    if (signUpDetails.password !== signUpDetails.renter_password) {
      return 1; // error:
    } else if (signUpDetails.username === "" || signUpDetails.password === "") {
      return 2; // error:details not filled
    } else {
      return 0; // no error
    }
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let errorORnot = validator();
    // console.log(errorORnot);

    if (errorORnot === 1) {
      errorMSGRef.current.textContent = "Error:Enter your password correctly";
      errorMSGRef.current.style.opacity = "1";
      // console.log(signUpDetails);
    } else if (errorORnot === 2) {
      errorMSGRef.current.textContent =
        "Error:Enter your username and password ";
      errorMSGRef.current.style.opacity = "1";
      // console.log(signUpDetails);
    } else if (errorORnot === 0) {
      console.log("validated!");
      errorMSGRef.current.style.opacity = "0";
      // console.log(signUpDetails);

      let ResFromServer = await fetch("http://10.29.2.113:5174/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        //We need to convert js object into JSON string to pass over
        body: JSON.stringify({
          username: signUpDetails.username.split(" ").join(""),
          password: signUpDetails.password.split(" ").join(""),
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("from server: ");
          console.log(data);
          return data;
        });

      if (ResFromServer.usernamePresent === true) {
        errorMSGRef.current.textContent = "Error:Username already in use!";
        errorMSGRef.current.style.opacity = "1";
      } else if (ResFromServer.detailsUpdate === "yes") {
        errorMSGRef.current.textContent = "registered";
        errorMSGRef.current.style.opacity = "1";
        // errorMSGRef.current.style.color = "green";
        setTimeout(() => {
          navigate("/snippets");
        }, 2000);
      } else {
        errorMSGRef.current.textContent =
          "Error:document didnt get inserted,maybe?";
        errorMSGRef.current.style.opacity = "1";
      }
    } else {
      errorMSGRef.current.textContent = "Error:Random error?";
      errorMSGRef.current.style.opacity = "1";
    }
  };

  return (
    <div id="signup-page">
      <div className="signup-div">
        <h1>Sign Up.</h1>
        <hr />
        <p>Join our community to unlock exclusive</p>
        <p>access to code snippets!</p>
        <div className="linux">
          <SiKalilinux size={80} />
          <SiArchlinux size={60} color="cyan" />
          <FaUbuntu size={60} color="purple" />
          <SiParrotsecurity size={60} color="#04e762" />
        </div>
        <p id="signup-errorMSG" ref={errorMSGRef}>
          {" "}
          dsdsd
        </p>
        <form onSubmit={handleRegisterSubmit}>
          <div className="signup-input-div">
            <input
              type="text"
              className="signup-input"
              autoComplete="username"
              name="username"
              placeholder="Enter your user name"
              maxLength={10}
              minLength={4}
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              className="signup-input"
              autoComplete="new-password"
              placeholder="Enter your password"
              maxLength={10}
              minLength={4}
              onChange={handleInputPass}
            />
            <input
              type="password"
              name="renter-password"
              className="signup-input"
              autoComplete="new-password"
              placeholder="Verify your password"
              maxLength={10}
              minLength={4}
              onChange={handleInputPassRe}
            />
          </div>
          <button id="signup-btns" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
