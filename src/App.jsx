import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((currentProducts) =>
      currentProducts.map((p) => {
        if (p.id === productId) {
          const currentAvg = p.avgRating;
          const currentCount = p.totalRatings;
          const newCount = currentCount + 1;
          const newAvg = (currentAvg * currentCount + newRating) / newCount;

          return {
            ...p,
            avgRating: newAvg,
            totalRatings: newCount,
          };
        }

        return p;
      })
    );
  };

  return (
    <div className="app-container">
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
