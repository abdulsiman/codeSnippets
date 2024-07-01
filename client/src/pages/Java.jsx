import React from "react";
import Navbar from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BsCpuFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { dark, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function Java() {
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
    codeBlockRef.current.classList.remove("extend1");
    codeBlockRef.current.classList.remove("extend2");
    boilerPlateBtnRef.current.classList.add("active");
    cppContainerRef.current.classList.remove("extend1");
    HelloBtnRef.current.classList.remove("active");
    OOPSBtnRef.current.classList.remove("active");
    codeRef.current.textContent = boilerplateCode;
  };

  const handleHelloBtn = () => {
    setCopyChecker("f");
    codeBlockRef.current.classList.remove("extend2");
    codeBlockRef.current.classList.add("extend1");
    HelloBtnRef.current.classList.add("active");
    boilerPlateBtnRef.current.classList.remove("active");
    OOPSBtnRef.current.classList.remove("active");
    cppContainerRef.current.classList.add("extend1");
    codeRef.current.textContent = fileIOcode;
  };

  const handleOOPSBtn = () => {
    setCopyChecker("m");
    codeBlockRef.current.classList.add("extend2");
    codeBlockRef.current.classList.remove("extend1");
    OOPSBtnRef.current.classList.add("active");
    HelloBtnRef.current.classList.remove("active");
    boilerPlateBtnRef.current.classList.remove("active");
    cppContainerRef.current.classList.remove("extend1");
    codeRef.current.textContent = multiCode;
  };

  const boilerplateCode = `
public class ClassName {

    // Constructor
    public ClassName() {
        // Constructor code here
    }

    // Destructor-like method
    // Java does not have destructors like C++, but you can use finalize (not recommended) or 
    define your own cleanup method
    @Override
    protected void finalize() throws Throwable {
        // Cleanup code here
        super.finalize();
    }

    public static void main(String[] args) {
        System.out.println("Hello, World!");
        // Write your code here
    }
}
  `;

  const fileIOcode = `
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileIOExample {

    // Constructor
    public FileIOExample() {
        // Constructor code here
    }

    // Destructor-like method
    @Override
    protected void finalize() throws Throwable {
        // Cleanup code here
        super.finalize();
    }

    // Method to write to a file
    public void writeToFile(String fileName, String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write(content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Method to read from a file
    public void readFromFile(String fileName) {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        System.out.println("File I/O Example");

        FileIOExample fileIO = new FileIOExample();

        // Write content to a file
        String fileName = "example.txt";
        String content = "Hello, World!\nThis is a file I/O example.";
        fileIO.writeToFile(fileName, content);

        // Read content from a file
        fileIO.readFromFile(fileName);
    }
}

`;
  const multiCode = `
#include <iostream>
#include <thread>
using namespace std;

void threadFunction() 
{
    cout << "Thread function is running." << endl;
}

int main() 
{
    thread t(threadFunction);
    t.join(); // Wait for the thread to finish
    cout << "Main function is running." << endl;

    return 0;
}
`;
  const coutCode = `System.out.println("Hello, World!");`;
  const cinCode = `int input = new java.util.Scanner(System.in).nextInt();
`;
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
          <h1>Java</h1>
          <hr />
          <div className="cpp-hero-contents">
            <p>
              Java is a widely-used, high-level, object-oriented programming
              language that was developed by Sun Microsystems in the mid-1990s.
              It is known for its portability across platforms, thanks to its
              principle of "write once, run anywhere" (WORA), which means that
              compiled Java code can run on any platform that supports Java
              without the need for recompilation.
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
              First install Java compiler and know what you are doing.
            </p>
            <div className="cpp-instructions">
              <h3>Compiling</h3>
              <p>
                Open your terminal and enter this command.This command compiles
                your C++ program.
              </p>
              <pre>javac filename.java</pre>
              <h3>Run your .exe file</h3>
              <p>
                After compiling is successfull, you can run your java file using
                this command:
              </p>
              <pre>java filename</pre>
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
            <pre id="code-block">
              <code ref={codeRef}>{boilerplateCode}</code>
            </pre>
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

export default Java;
