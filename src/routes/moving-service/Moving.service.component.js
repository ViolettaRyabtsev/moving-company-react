// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import { GiVikingHelmet } from "react-icons/gi";
import "../main-text.styles.scss";

function MovingServices() {
  const slideImages = [
    {
      src: "./images/car2.jpg",
      caption: "Slide 1",
    },
    {
      src: "./images/packing.jpg",
      caption: "Slide 2",
    },
    {
      src: "./images/shelf.jpg",
      caption: "Slide 3",
    },
    {
      src: "./images/smile.jpg",
      caption: "Slide 3",
    },
    {
      src: "./images/car.jpg",
      caption: "Slide 3",
    },
    {
      src: "./images/money.jpg",
      caption: "Slide 3",
    },
    {
      src: "./images/moving.jpg",
      caption: "Slide 3",
    },
  ];

  return (
    <div className="text-container">
      <div>
        <h3>LOCAL MOVES</h3>{" "}
        <p>
          The majority of Viking's work is done in Southern California with Long
          Beach and the Greater Los Angeles area being our busiest area. And
          since Viking is a full-service moving company, we are happy to do
          moves anywhere from simple, one bedroom apartments to full, 4 bedroom
          family homes. Every week Viking performs literally dozens of single
          person and family relocations from Long Beach and the Los Angeles area
          to new places within that area and we can honestly say that we have
          never had a dissatisfied client! <br></br> <br></br> Every week Viking
          performs literally dozens of single person and family relocations from
          Long Beach and the Los Angeles area to new places within that area and
          we can honestly say that we have never had a dissatisfied client!{" "}
          <br></br> The cost for many local moves is based on an hourly system
          and is generally the best and most economic way for our customers.
          Other moves in larger apartments and homes or challenging obstacles
          like multiple stairs, floors, or large amounts of furniture are
          subject to flat-rates. This is were we have an assessor come to your
          home, meet you and preform a 10-15 minute walk-through and at the
          conclusion, tell you exactly how much your move will cost and discuss
          strategies with you in terms of helping you in the most efficient way
          possible so you move is as easy and streamlined as can be.
        </p>
        <div className="price">
          <div className="viking">
            {" "}
            <GiVikingHelmet /> <GiVikingHelmet /> 2 Vikings - 99/Hour{" "}
          </div>
          <div className="viking">
            {" "}
            <GiVikingHelmet /> <GiVikingHelmet /> <GiVikingHelmet /> 3 Vikings -
            129/Hour
          </div>
          <div className="viking">
            <GiVikingHelmet /> <GiVikingHelmet /> <GiVikingHelmet />{" "}
            <GiVikingHelmet /> 4 Vikings - 159/Hour
          </div>
          <div className="viking">
            <GiVikingHelmet /> <GiVikingHelmet /> <GiVikingHelmet />{" "}
            <GiVikingHelmet /> <GiVikingHelmet /> 5 Vikings - 189/Hour
          </div>
        </div>
        <p>
          <b>Please note:</b> Unlike many other full-service moving companies,
          Viking is quite pleased to offer our clients the following: <br></br>
          <b>* LOW, 3 HOUR MINIMUM!</b> Unlike most other moving services that
          charge 3 and 4 hour minimums, Viking has a reasonable, 3 hour minimum
          for our services. <br></br> <b> * No surcharge for credit cards! </b>
          Our price is the same if you choose to put your charges on your credit
          card, and Viking accepts all major credit cards. <br></br> We do have
          surcharges for unusually heavy or large items (see Piano and Safe
          section of website), but for most homes, this does not apply. But
          please do let us know if you have an unusually heavy or large piece of
          furniture so we can come prepared.<br></br>
          We also have a service charge that covers miscellaneous expenses, fuel
          and mileage in lieu of charging 'drive time' that apply to all moves.
        </p>
        <h3>CALIFORNIA STATE MOVES</h3>
        <p>
          Our next busiest area is California State with San Diego, San
          Francisco and all points between being the most popular. Most of these
          moves are a little more detailed in terms of the work involved since
          such moves require a little more care in how we pack and protect your
          furnishings and belongings. Our number one concern at Viking is making
          absolutely sure that your property arrives at your new place exactly
          as it left your old one so we take a little more time and use more
          material to accomplish that goal.
        </p>
        <h3>INTERSTATE MOVES</h3>
        <p>
          Finally, Viking offers full-service, long-distance moving that
          operates beautifully, efficiently and quite economically! As for our
          interstate California moves, our first priority is making sure that
          your belongings are packed correctly to come out of your house, into
          our truck and into your new place in another state. In addition,
          Viking has its own dedicated long-distance truck, crew and equipment
          to relocate you and we never contract your move to someone else.
          Although long-distance moves always involve a good amount of driving,
          they are one of our favorites as it is always rewarding to see our
          clients happy once their moving stress is over and they are in their
          new place with a big smile!{" "}
        </p>
        {/* <div className="carousel">
          <div className="photos">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${slideImage.src})`,
                      height: "400px",
                      width: "500px",
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
          <ul>
            <li>Junior 1 Bedroom Apt. (1 person) 2 to 4 hrs - 2 movers</li>
            <li>1 Bedroom Apt. (1 person) 3 to 5hrs - 2 movers</li>
            <li>2 Bedroom Apt. (2 person) 5 to 6hrs - 2 movers</li>
            <li>2 Bedroom Apt. (family) 6 to 8hrs - 2 movers</li>
            <li>2 Bedroom House 6 to 8hrs - 2, 3 movers</li>
            <li>3 Bedroom House 6 to 9hrs - 3 movers</li>
            <li>4 Bedroom House up to 12hrs</li>
          </ul>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default MovingServices;
