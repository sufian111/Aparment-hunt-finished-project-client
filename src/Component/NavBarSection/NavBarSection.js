import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBarSection.css";
import logo from "../../Image/logos/Logo.png";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./NavBarSection.css";
const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img height="50px" width="100px" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto font-weight-bold">
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mr-4">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/dashboard">
                Concerns
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/event">
                Event
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/dashboard">
                <button className="button">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarSection;
