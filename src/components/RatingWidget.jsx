import { useState } from "react";
import PropTypes from "prop-types";
import "./RatingWidget.css";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert("Please select a rating first!");
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars" onMouseLeave={handleMouseLeave}>
        {[1, 2, 3, 4, 5].map((starValue) => {
          const isActive = starValue <= (hoveredRating || rating);
          return (
            <span
              key={starValue}
              className={`star ${isActive ? "active" : ""}`}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
            >
              {isActive ? "★" : "☆"}
            </span>
          );
        })}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
