import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <h3>Viking Moving And Relocation</h3>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about-us">
            About
          </Link>
          <Link className="nav-link" to="/moving-services">
            Moving Serviced
          </Link>

          <Link className="nav-link" to="/packing-services">
            Packing Services
          </Link>
          <Link className="nav-link" to="/storage-services">
            Storage Services
          </Link>
          <Link className="nav-link" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
