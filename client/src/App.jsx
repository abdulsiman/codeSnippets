import React from "react";
import Main from "./components/Main";
import "./App.css";
import Cards from "./components/cards";
import Body from "./components/bodyCom";

function App() {
  return (
    <>
      <div className="container">
        <Main />
        <Cards />
        <Body />
        <div className="end"></div>
      </div>
    </>
  );
}

export default App;
