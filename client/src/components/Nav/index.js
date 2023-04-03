import React from "react";
import auth from "../../utils/auth";
import "../../styles/nav.css";
import logo from "../../image/logo.png";

//function to create the nav bar
function Nav() {
  function userLogout() {
    auth.logout();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <div className="icon">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profiles">
                  Find Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chat">
                  Chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/editbio">
                  Edit Bio
                </a>
              </li>
              {auth.loggedIn() ? (
                <li className="nav-item">
                  <a className="nav-link" onClick={userLogout}>
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

//exports the nav generating function
export default Nav;
