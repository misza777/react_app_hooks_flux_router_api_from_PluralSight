import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "orange", backGroundColor: "black" };
  // EXACT bardzo wazne
  return (
    <nav
      className="
    navbar-brand 
    bg-light"
    >
      <NavLink
        exact
        className="btn btn-primary"
        activeStyle={activeStyle}
        to="/"
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        className="btn btn-success"
        activeStyle={activeStyle}
        to="/courses"
      >
        Courses
      </NavLink>
      {" | "}
      <NavLink className="btn btn-info" activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
