import "../main-text.styles.scss";
import ContactUs from "../contact-us/Contact.component";
function StorageServices() {
  return (
    <>
      <div className="text-container-about-us">
        <div className="logo-text">
          <img
            className="logo-container"
            alt="logo"
            src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking-footer.png"
          ></img>
          <h2>Stress-Free Storage Services</h2>
          <button>GET MOVING</button>
          <h3> (818) 845 46 47</h3>
        </div>
        <ContactUs />
      </div>

      <div className="text-container">
        <div>
          <p>
            {" "}
            All of us have had that "what am I going to do with all these
            things! I don't want to take them, but I want to keep them!" moment,
            and we know how it feels! For that reason and for your convenience,
            Viking offers a great storage solution for you. We will store your
            things in our warehouse safely, accessibly and affordably, for a
            short stay or a long period, which ever you decide is best for you.{" "}
            <br></br> <br></br>Call us and let us know how we may be able to
            help you with your storage needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default StorageServices;
