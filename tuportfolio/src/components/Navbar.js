import React from "react";
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
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

        <a href="index.html" className="navbar-brand mx-auto mx-lg-0">
          <img src={logo} alt="Logo" width="70px" height="70px" />

        </a>

        <div className="d-flex align-items-center d-lg-none">
          <i className="navbar-icon bi-telephone-plus me-3"></i>
          <a className="custom-btn btn" href="#section_5">
            078-230-39-31
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_3">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_4">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_5">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-lg-flex align-items-center d-none ms-auto">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" href="#section_5">
              078-230-39-31
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
