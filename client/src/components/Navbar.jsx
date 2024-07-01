import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Timeline } from "gsap/gsap-core";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  // console.log("Navbar animation:" + props.animation);
  //  ** SInce gsap runs async We need to use timeline to control animations
  const timeline1 = gsap.timeline();
  const navigate = useNavigate();

  if (props.animation == true) {
    useGSAP(() => {
      timeline1.from("#logo-div", {
        x: -150,
        opacity: 0,
        delay: 1,
        duration: 1.5,
      });
      timeline1.from("#nav li", {
        y: -25,
        opacity: 0,
        // delay: 2.3,
        duration: 0.5,
        stagger: 0.5,
      });
    });
  }

  const handleClickSignUp = (e) => {
    console.log("sign up button clicked");
    navigate("/signup");
  };

  return (
    <div id="nav">
      <div id="logo-div">
        <FaEarthAmericas size={50} />
        <span id="logo-span">SPEEDCODE</span>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="#">Snippets</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
      <button onClick={handleClickSignUp}>Sign Up</button>
    </div>
  );
}

export default Navbar;
