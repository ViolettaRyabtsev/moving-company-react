import { BiPhoneCall } from "react-icons/bi";
import "../main-text.styles.scss";
import Reviews from "../../components/reviews/Reviews.compononent";
import "./about.styles.scss";
import ContactUs from "../contact-us/Contact.component";

const data = [
  {
    img: "https://s3.us-west-2.amazonaws.com/moveviking.com/images/packing.png",
    text: "PACKING & UNPACKING",
    body:
      "Viking will also specially wrap anything you have that is fragile for you. The rest of your belongings are packed by you before your movers arrive and are then loaded on your moving truck! Viking will also provide re-usable boxes for you to pack things upon request",
  },
  {
    img:
      "https://s3.us-west-2.amazonaws.com/moveviking.com/images/local.moves.png",
    text: "LOCAL MOVES",
    body:
      "The cost for many local moves is based on an hourly system and is generally the best and most economic way for our customers",
  },
  {
    img: "https://s3.us-west-2.amazonaws.com/moveviking.com/images/truck.png",
    text: "LONG DISTANCE MOVES",
    body:
      "Our next busiest area is California State with San Diego, San Francisco and all points between being the most popular. Most of these moves are a little more detailed in terms of the work involved since such moves require a little more care in how we pack and protect your furnishings and belongings. ",
  },
  {
    img:
      "https://s3.us-west-2.amazonaws.com/moveviking.com/images/transperent.boxes.png",
    text: "COMMERCIAL MOVES",
    body:
      "Our intermediate pack option is a step up from our basic pack; we come into your home and pack books, clothes, audio and visual equipment as well as most of your basic belongings. The intermediate pack option is best for moves that are longer distance",
  },
  {
    img: "https://s3.us-west-2.amazonaws.com/moveviking.com/images/piano.png",
    text: "PIANO AND SAFES",
    body:
      "Viking's full-pack option is exactly as it sounds! We come into your home and pack your place from top to bottom in preparation for what will be a long-distance move for you. The full pack option includes everything including clothing, fragile items, kitchenware, electronics, wall hangings, et cetera",
  },
];

const Home = () => {
  return (
    <>
      <div className="text-container-about-us">
        <div className="logo-text">
          <img
            className="logo-container"
            alt="logo"
            src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking-footer.png"
          ></img>
          <h2>Stress-Free Moving Services</h2>
          <button>GET MOVING</button>
          <h3> (818) 845 46 47</h3>
        </div>
        <ContactUs />
      </div>
      <div className="that-we-offer-container">
        <h2>What We Offer</h2>
        <p>
          Viking Moving and Relocation is a full service moving company based in
          Southern California and serving all of California along with dozens of
          other cities within the United States. Viking's business model is
          based on two quite simple yet infinitely important concepts: customer
          service and quality.
        </p>
        <div className="that-offer-single-container">
          {data.map((object) => (
            <div className="that-offer-single">
              <img
                src={object.img}
                alt="logo"
                width="100px"
                height="80px"
              ></img>
              <h3>{object.text}</h3>
              <p>{object.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Home;
