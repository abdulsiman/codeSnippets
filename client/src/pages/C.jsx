import React from "react";
import Navbar from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BsCpuFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { dark, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function C() {
  const [CopyChecker, setCopyChecker] = useState("b");
  const boilerPlateBtnRef = useRef(null);
  const HelloBtnRef = useRef(null);
  const OOPSBtnRef = useRef(null);
  const codeRef = useRef(null);
  const codeBlockRef = useRef(null);
  const cppContainerRef = useRef(null);

  useEffect(() => {
    boilerPlateBtnRef.current.classList.add("active");
  }, []);

  const copyToClipboard = () => {
    // alert(CopyChecker);
    let textToCopy;
    if (CopyChecker == "b") {
      textToCopy = boilerplateCode;
    } else if (CopyChecker == "f") {
      textToCopy = fileIOcode;
    } else if (CopyChecker == "m") {
      textToCopy = multiCode;
    } else {
      alert("copy manually");
    }
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  const handleBoilerBtn = () => {
    setCopyChecker("b");
    // codeBlockRef.current.classList.remove("extend1");
    // codeBlockRef.current.classList.remove("extend2");
    boilerPlateBtnRef.current.classList.add("active");
    HelloBtnRef.current.classList.remove("active");
    OOPSBtnRef.current.classList.remove("active");
    cppContainerRef.current.classList.remove("extend0");
    codeRef.current.textContent = boilerplateCode;
  };

  const handleHelloBtn = () => {
    setCopyChecker("f");
    // codeBlockRef.current.classList.remove("extend2");
    // codeBlockRef.current.classList.add("extend1");
    HelloBtnRef.current.classList.add("active");
    boilerPlateBtnRef.current.classList.remove("active");
    OOPSBtnRef.current.classList.remove("active");
    cppContainerRef.current.classList.remove("extend0");
    codeRef.current.textContent = fileIOcode;
  };

  const handleOOPSBtn = () => {
    setCopyChecker("m");
    // codeBlockRef.current.classList.add("extend2");
    // codeBlockRef.current.classList.remove("extend1");
    OOPSBtnRef.current.classList.add("active");
    HelloBtnRef.current.classList.remove("active");
    boilerPlateBtnRef.current.classList.remove("active");
    codeRef.current.textContent = multiCode;
    cppContainerRef.current.classList.add("extend0");
  };

  const boilerplateCode = `
#include<stdio.h>

int main()
{
  cout<<"Hello World";
  //write your code here;

  return 0;
}
`;

  const fileIOcode = `
  #include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "r"); // Open for reading
    if (file == NULL) {
        printf("Error opening file.");
        return 1;
    }

    // File operations go here

    fclose(file); // Close the file
    return 0;
}
`;
  const multiCode = `
#include <stdio.h>
#include <pthread.h>

void* printMessage(void* arg) {
    char* message = (char*) arg;
    printf("%s\n", message);
    return NULL;
}

int main() {
    pthread_t thread1, thread2;
    
    char* message1 = "Hello from Thread 1";
    char* message2 = "Hello from Thread 2";

    // Create threads
    pthread_create(&thread1, NULL, printMessage, (void*) message1);
    pthread_create(&thread2, NULL, printMessage, (void*) message2);

    // Wait for threads to finish
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    return 0;
}

`;
  const coutCode = `printf("hello world!");`;
  const cinCode = `scanf("%d",&var);`;
  const ifCode = `if(condition)
  {
    //code to be excecuted
  }
  else{
    //code to be executed
  }`;
  const forCode = `for(int i=0;i<something;i++)
  {
    // code to be executed in loop
  }`;

  return (
    <div className="cpp-main-div">
      <Navbar />
      <div className="Cpp-container" ref={cppContainerRef}>
        <div className="cpp-hero">
          <h1>C</h1>
          <hr />
          <div className="cpp-hero-contents">
            <p>
              C is a general-purpose, procedural programming language that was
              developed in the early 1970s by Dennis Ritchie at Bell Labs. It
              has become one of the most widely used programming languages of
              all time, particularly for system and application software.
            </p>
            <ul>
              <li>printing to display</li>
              <li>taking input from user</li>
              <li>if else Statements</li>
              <li>For loop</li>
              <li>while loop</li>
              <li>functions</li>
              <li>Macros</li>
              <li>try catch</li>
              <li>memory allocation</li>
              <li>string operations</li>
              <li>including header files</li>
              <li>making classes</li>
            </ul>
          </div>
        </div>
        {/* DOnt remove this div below */}
        <div className="right"></div>
        {/* ********************************? */}
        <div className="cpp-codeBox" ref={codeBlockRef}>
          <div className="cpp-codeBox-contents">
            <h1>Learn Basics</h1>
            <p id="install-para">
              First install mingw compiler and know what you are doing.
            </p>
            <div className="cpp-instructions">
              <h3>Compiling</h3>
              <p>
                Open your terminal and enter this command.This command compiles
                your C++ program.
              </p>
              <pre>gcc filename.cpp -o filename.exe</pre>
              <h3>Run your .exe file</h3>
              <p>
                After compiling is successfull, you can run your .exe file using
                this command:
              </p>
              <pre>./filename.exe</pre>
            </div>
          </div>
          <div className="cpp-options-btn">
            <button ref={boilerPlateBtnRef} onClick={handleBoilerBtn}>
              Boiler Plate
            </button>
            <button ref={HelloBtnRef} onClick={handleHelloBtn}>
              FILE I/O
            </button>
            <button ref={OOPSBtnRef} onClick={handleOOPSBtn}>
              Multi Threading
            </button>
          </div>

          <div className="codeBlock-div">
            <div className="written-code-div">
              <pre id="code-block">
                <code ref={codeRef}>{boilerplateCode}</code>
              </pre>
            </div>
            <div className="copy">
              <button onClick={copyToClipboard}>
                <FaRegCopy color="#bf1650" size={30} />
              </button>
            </div>
          </div>

          <div className="more-snippets">
            <h2>Some Important Snippets</h2>
            <div className="cpp-instructions">
              <h3>Printing Output</h3>
              <p>This funtion is used to print ot the display.</p>
              <pre>{coutCode}</pre>
              <h3>Taking user input</h3>
              <p>
                This function is used to take input from the user keyboard. It
                will store the input in a variable.
              </p>
              <pre>{cinCode}</pre>
              <h3>If Else Statements</h3>
              <p>
                Used to perform specific tasks when specific conditions are met.
              </p>
              <pre id="imp-snipps">{ifCode}</pre>
              <h3>For Loop</h3>
              <p>Used to execute code in a loop.</p>
              <pre id="imp-snipps1">{forCode}</pre>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default C;