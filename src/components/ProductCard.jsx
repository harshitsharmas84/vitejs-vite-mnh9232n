
import PropTypes from 'prop-types'; 
import RatingWidget from './RatingWidget';
import './ProductCard.css'; 

function ProductCard({ product, handleRatingSubmit }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
       
        Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)
      </p>

     
      <RatingWidget
        productId={product.id}
        onRatingSubmit={handleRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
  }).isRequired,
  handleRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;