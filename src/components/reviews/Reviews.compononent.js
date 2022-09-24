import ReviewItem from "../review.item/Review.item.component";
import reviews from "../../reviews.json";
import "./reviews.style.scss";

const ReviewsComponents = () => {
  return (
    <div className="reviews-container-main">
      <h2>Satisfaction Guaranteed!</h2>
      <h5>
        We are absolutely certain that once you have spoken with us and decide
        to entrust your moving needs to us, you will agree and join hundreds of
        others who we have had the good fortune to work for!
      </h5>
      <div className="reviews-container">
        {reviews.map((object) => (
          <ReviewItem review={object} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponents;
