import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <div>
          {" "}
          <img
            className="logo-container"
            alt="logo"
            src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking.png"
          ></img>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            ABOUT US
          </Link>
          <Link className="nav-link" to="/moving-services">
            MOVING SERVICED
          </Link>
          <Link className="nav-link" to="/piano-safes">
            {" "}
            PIANO AND SAFES
          </Link>
          <Link className="nav-link" to="/packing-services">
            PACKING SERVICES
          </Link>
          <Link className="nav-link" to="/storage-services">
            STORAGE SERVICES
          </Link>
          <Link className="nav-link" to="/contact-us">
            CONTACT US
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
