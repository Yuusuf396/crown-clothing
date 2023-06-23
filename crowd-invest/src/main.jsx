import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./sign-in/sign-in.jsx";
import Dashboard from "./Dashboard.jsx";
import SignUp from "./sign-up/sign-up.jsx";
import AfterSingIn from "./sign-in/after-sign-in";

const router = createBrowserRouter([
  {
    path:"/",
    element:<SignUp/>
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path:"/thanksforcreating",
    element:<AfterSingIn/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
