import React from "react";  
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Home from "./Patients/Home";
import Contact from "./Patients/Contact";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <Home />
      <Contact/>
    </App>
  </React.StrictMode>
);