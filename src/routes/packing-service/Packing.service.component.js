import "../main-text.styles.scss";
import ContactUs from "../contact-us/Contact.component";
function PackingServices() {
  return (
    <>
      {" "}
      <div className="text-container-about-us">
        <div className="logo-text">
          <img
            className="logo-container"
            alt="logo"
            src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking-footer.png"
          ></img>
          <h2>Stress-Free Packing Services</h2>
          <button>GET MOVING</button>
          <h3> (818) 845 46 47</h3>
        </div>
        <ContactUs />
      </div>
      <div className="text-container">
        <div className="text">
          <h2>MINIMAL PACK</h2>
          <p>
            At Viking, our highest priority is making sure that your furniture
            and belongings arrive to your new home in the same condition that
            they left. Our minimal pack option is ideal for local or short
            distance moves. Once your movers arrive, we come into your home and
            pack all of your furniture and home furnishings in our moving
            blankets so they will be safe during the moving process and while
            they are being transported.<br></br>
            <br></br> Viking will also specially wrap anything you have that is
            fragile for you. The rest of your belongings are packed by you
            before your movers arrive and are then loaded on your moving truck!
            Viking will also provide re-usable boxes for you to pack things upon
            request. If you find that you have more things than you want to
            take, but at the same time do not want to simply dispose of or throw
            away your things, check out our short and long-term STORAGE SERVICES
          </p>
          <h2>INTERMEDIATE PACK</h2>
          <p>
            Our intermediate pack option is a step up from our basic pack; we
            come into your home and pack books, clothes, audio and visual
            equipment as well as most of your basic belongings. The intermediate
            pack option is best for moves that are longer distance (such as Los
            Angeles to San Francisco or San Francisco to San Diego).<br></br>
            <br></br> Our most important goal at Viking is to make sure your
            furniture and belongings are packed well and not damaged during the
            moving process.<br></br>
            <br></br> If you find that you have more things than you want to
            take, but at the same time do not want to simply dispose of or throw
            away your things, check out our short and long-term{" "}
            <b>STORAGE SERVICES</b>.
          </p>
          <h2>FULL PACK</h2>
          <p>
            Viking's full-pack option is exactly as it sounds! We come into your
            home and pack your place from top to bottom in preparation for what
            will be a long-distance move for you. The full pack option includes
            everything including clothing, fragile items, kitchenware,
            electronics, wall hangings, et cetera. As with all of our packing
            options, Viking uses protective and re-useable boxes so that your
            belongings are transported safely and also to reduce the cost of
            your move.
          </p>
        </div>
      </div>
    </>
  );
}

export default PackingServices;
