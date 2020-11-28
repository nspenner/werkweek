import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Root.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
