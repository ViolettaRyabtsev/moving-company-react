import "./footer.style.scss";
import { GoLocation } from "react-icons/go";
import { FaYelp } from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <img
        alt="logo"
        src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking-footer.png"
      ></img>
      <button className="button">
        <Link className="link" to="/contact-us">
          CONTACT US
        </Link>
      </button>
      <div className="phone-container">
        <h4 style={{ color: "#0464a4" }}>(818) 845 46 47</h4>
        <h4>Vikingmovingandrelocation@gmail.com</h4>
        <h4>Long Beach, CA</h4>
      </div>
      <div className="social-media-container">
        <a href="https://www.yelp.com/biz/viking-moving-and-relocation-services-long-beach">
          <FaYelp style={{ color: "#746c61" }} size={30} />
        </a>
        <a href="https://goo.gl/maps/mr66i3sJsSq2ZMeZ7">
          <GoLocation style={{ color: "#746c61" }} size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
