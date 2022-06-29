import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="img-button-container">
        <img
          alt="logo"
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking.png"
        ></img>
        <button>Contact Us</button>
      </div>
      <div className="contact-media-container">
        <div className="contact-container">telephone</div>
        <div className="social-media-container">social</div>
      </div>
    </div>
  );
};

export default Footer;
