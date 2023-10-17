import React from "react";
import styles from "./NavBar.module.css";
import chat from "../../assets/images/chat.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      {" "}
      {/* <nav className="navbar navbar-light bg-main">
        <div className="container d-flex justify-content-start ">
          <Link to="">
            <img
              src={chat}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top m-3"
            />
          </Link>
          <span className="text-main fa-lg">
            <strong>MessengerApp</strong>
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active title"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img
              src={chat}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top m-3"
            />
          </Link>
          <span className="text-main fa-lg">
            <strong>List of Tasks</strong>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <Link
                  className="nav-link active text-danger "
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
