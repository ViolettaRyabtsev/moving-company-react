import { GiVikingHelmet } from "react-icons/gi";
import "../main-text.styles.scss";
import Reviews from "../../components/reviews/Reviews.compononent";
import "./about.styles.scss";

const AboutUs = () => {
  return (
    <>
      <div className="text-container">
        <div className="main-text">
          {" "}
          <p>
            Viking Moving and Relocation is a full service moving company based
            in Southern California and serving all of California along with
            dozens of other cities within the United States. Viking's business
            model is based on two quite simple yet infinitely important
            concepts: customer service and quality. Our goal and objective is to
            provide you with the absolute best, quickest and most efficient (and
            least stressful!) moving experience possible and in our years of
            business, we can honestly say that we have exceeded our goals!{" "}
          </p>{" "}
          <p>
            We are absolutely certain that once you have spoken with us and
            decide to entrust your moving needs to us, you will agree and join
            hundreds of others who we have had the good fortune to work for! The
            cost for many local moves is based on an hourly system and is
            generally the best and most economic way for our customers. Other
            moves in larger apartments and homes or challenging obstacles like
            multiple stairs, floors, or large amounts of furniture are subject
            to flat-rates. This is were we have an assessor come to your home,
            meet you and preform a 10-15 minute walk-through and at the
            conclusion, tell you exactly how much your move will cost and
            discuss strategies with you in terms of helping you in the most
            efficient way possible so you move is as easy and streamlined as can
            be.
          </p>
          <ul>
            <li>Junior 1 Bedroom Apt. (1 person) 2 to 4 hrs - 2 movers</li>
            <li>1 Bedroom Apt. (1 person) 3 to 5hrs - 2 movers</li>
            <li>2 Bedroom Apt. (2 person) 5 to 6hrs - 2 movers</li>
            <li>2 Bedroom Apt. (family) 6 to 8hrs - 2 movers</li>
            <li>2 Bedroom House 6 to 8hrs - 2, 3 movers</li>
            <li>3 Bedroom House 6 to 9hrs - 3 movers</li>
            <li>4 Bedroom House up to 12hrs</li>
          </ul>
          <p>
            {" "}
            We do have surcharges for unusually heavy or large items (see{" "}
            <b>Piano and Safe section </b> of website), but for most homes, this
            does not apply. But please do let us know if you have an unusually
            heavy or large piece of furniture so we can come prepared.
          </p>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default AboutUs;
