import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-header">
          <div className="signUp">
            <span>icon</span>
            <h3>Do you need a business account?</h3>
            <Link to="#">Sign Up Now</Link>
          </div>
        </div>
        <div className="navbar">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">icon</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
