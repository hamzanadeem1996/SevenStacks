import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../static/images/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="ml-0 container">
        <NavLink className="navbar-brand js-scroll-trigger" to="/">
          <img
            src={logo}
            alt="logo"
            width={240}
            height={240}
            style={{ objectFit: "cover" }}
          />
        </NavLink>

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
              <Link
                className="nav-link js-scroll-trigger"
                activeClass="active"
                smooth
                spy
                to="services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                activeClass="active"
                smooth
                spy
                to="customers"
              >
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                activeClass="active"
                smooth
                spy
                to="process"
              >
                Process
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/contact">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
