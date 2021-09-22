import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Menu from "./Menu";
import Menu2 from "./Menu2";
ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <br />
    <h4>React Menu using different components</h4>
    <Menu2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
