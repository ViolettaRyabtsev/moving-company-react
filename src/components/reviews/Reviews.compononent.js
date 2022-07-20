import ReviewItem from "../review.item/Review.item.component";
import reviews from "../../reviews.json";
import "./reviews.style.scss";

const ReviewsComponents = () => {
  return (
    <>
      <div className="check-review">
        {" "}
        <h2></h2>{" "}
      </div>
      <div className="reviews-container">
        {reviews.map((object) => (
          <ReviewItem review={object} />
        ))}
      </div>
    </>
  );
};

export default ReviewsComponents;
