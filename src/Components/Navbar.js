import React, { Component } from "react";

const Navbar = () => {
  return (
    <nav className="mainNav white" role="navigation">
      <div className="nav-wrapper container">
        <a className="waves-effect waves-light btn  light-blue darken-2">
          button
        </a>
        <ul className="right">
          <li>
            <a className="blue-text text-darken-2" href="#">
              Navbar Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
