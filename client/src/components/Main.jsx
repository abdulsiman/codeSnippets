import React from "react";
import Navbar from "./Navbar";
import Solar from "./Solar";

function Main() {
  return (
    <div id="main">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar animation={true} />
      <Solar />
    </div>
  );
}

export default Main;
