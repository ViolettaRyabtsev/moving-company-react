import "../reviews/reviews.style.scss";
import { AiFillStar } from "react-icons/ai";
const ReviewItem = ({ review }) => {
  console.log(review);
  const { name, date, location, body, stars } = review;
  return (
    <div className="review-box">
      <div className="review-box-header">
        <h3>{name}</h3>
        <h3 style={{ "margin-left": "10px" }}>{date}</h3>
      </div>
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p>{body}</p>
      <h4>{location}</h4>
    </div>
  );
};

export default ReviewItem;
