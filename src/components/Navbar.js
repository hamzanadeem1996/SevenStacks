import React from "react";
import logo from "../static/images/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="ml-0 container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img
            src={logo}
            alt="logo"
            width={240}
            height={240}
            style={{ objectFit: "cover" }}
          />
        </a>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ml-1"></i>
        </button>
        <div
          className="collapse navbar-collapse text-end"
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#customers">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#process">
                Process
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
