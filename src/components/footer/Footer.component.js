import "./footer.style.scss";
import { ImInstagram } from "react-icons/im";
import { FaYelp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <img
        alt="logo"
        src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking.png"
      ></img>
      <button className="button">
        <Link className="link" to="/contact-us">
          CONTACT US
        </Link>
      </button>
      <div className="phone-container">
        <h4>818 845 46 47</h4>
        <h4>viking@vikingmovingandrelocation.com</h4>
        <h4>Long Beach, CA</h4>
      </div>
      <div className="social-media-container">
        <ImInstagram />
        <FaYelp />
        <BsTwitter />
        <AiFillFacebook />
      </div>
    </div>
  );
};

export default Footer;
