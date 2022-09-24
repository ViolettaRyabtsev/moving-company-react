import ContactUs from "../contact-us/Contact.component";
import "./contact-route.scss";
const ContactRoute = () => {
  return (
    <div className="text-container-about-us">
      <div className="logo-text">
        <img
          className="logo-container"
          alt="logo"
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking-footer.png"
        ></img>
        <h2>Get Started With a Free Quote</h2>
        <button>GET MOVING</button>
        <h3> (818) 845 46 47</h3>
      </div>
      <ContactUs />
    </div>
  );
};

export default ContactRoute;
