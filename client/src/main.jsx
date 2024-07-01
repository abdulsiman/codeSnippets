import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Snippets from "./pages/Snippets.jsx";
import Signup from "./pages/Signup.jsx";
import Cpp from "./pages/Cpp.jsx";
import C from "./pages/C.jsx";
import Java from "./pages/Java.jsx";
import Python from "./pages/Python.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/snippets",
    element: <Snippets />,
  },
  {
    path: "/snippets/C++",
    element: <Cpp />,
  },
  {
    path: "/snippets/C",
    element: <C />,
  },
  {
    path: "/snippets/Java",
    element: <Java />,
  },
  {
    path: "/snippets/Python",
    element: <Python />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
