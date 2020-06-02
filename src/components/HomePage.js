import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>This is very simple Ract App with Hooks and Flux</h1>
      <p>React, Flux, Bootstrap, and other miracles with lots of magic. </p>
      <Link to="about" className="btn btn-warning font-weight-bold">
        About
      </Link>
    </div>
  );
}

export default HomePage;
