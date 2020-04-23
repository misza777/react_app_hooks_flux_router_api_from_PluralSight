import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

render(
  <>
    <Router>
      <App />
    </Router>
    ,
  </>,
  document.getElementById("root")
);
