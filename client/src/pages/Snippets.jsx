import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Snippets() {
  const navigate = useNavigate();
  // array
  const searchPossiblitiesArr = [
    ["C", "c", "Clanguage", "clanguage"],
    ["C++", "c++", "cpp", "Cpp"],
    ["Java", "java", "ja", "jav"],
    ["Python", "python", "py", "pyth"],
  ];
  const [Search, setSearch] = useState(null); // setting state is async
  const [NavgTo, setNavgTo] = useState(null);
  const errorMSGRef = useRef(null);

  useEffect(() => {
    if (NavgTo === null) {
      console.log(
        "Navgto is empty, Maybe because useEffect is invoked when page is rendered first time"
      );
    } else {
      errorMSGRef.current.style.opacity = 0;
      navgMatcher();
    }
  }, [NavgTo]);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value.split(" ").join(""));
  };

  const navgMatcher = () => {
    console.log("var:\n" + NavgTo);
    if (NavgTo === "C++") {
      navigate("/snippets/C++");
    } else if (NavgTo === "C") {
      navigate("/snippets/C");
    } else if (NavgTo === "Java") {
      navigate("/snippets/Java");
    } else if (NavgTo === "Python") {
      navigate("/snippets/Python");
    } else {
      errorMSGRef.current.style.opacity = 1;
      errorMSGRef.current.textContent = "Can't find any matching results";
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log("searching......");
    // console.log(Search);
    if (Search === null) {
      errorMSGRef.current.style.opacity = 1;
      errorMSGRef.current.textContent = "Write something in input nigga";
    } else if (Search.length < 1) {
      errorMSGRef.current.style.opacity = 1;
    } else {
      errorMSGRef.current.style.opacity = 0;
      for (let i = 0; i < searchPossiblitiesArr.length; i++) {
        for (let j = 0; j < searchPossiblitiesArr[i].length; j++) {
          // console.log(searchPossiblitiesArr[i][j]);
          if (Search === searchPossiblitiesArr[i][j]) {
            console.log("matched!");
            setNavgTo(searchPossiblitiesArr[i][0]);
          }
          // console.log(searchPossiblitiesArr[i][j]);
        }
      }
    }
    console.log("done Searching");
  };

  return (
    <div>
      <Navbar />
      <div className="snippets-main-page-div">
        <h1>Get your snippets.</h1>
        <p>
          Please search for the specific coding language related to the snippet
          you need.
        </p>
        <p id="searchError-MSG" ref={errorMSGRef}>
          Enter atleast 1 characters
        </p>
        <form onSubmit={handleSubmitSearch}>
          <input
            onChange={handleSearch}
            type="search"
            name="searcher"
            id="search-input"
            placeholder="search your programming language"
          />
          <button type="submit">Search</button>
        </form>
        <hr />
      </div>
    </div>
  );
}

export default Snippets;
