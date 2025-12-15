import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { productCardStyles } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    addToCart(product);
    setIsAdding(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{
        color: i < Math.floor(rating) ? '#ffa500' : '#ddd',
        fontSize: '14px'
      }}>★</span>
    ));
  };

  return (
    <div 
      style={{
        ...productCardStyles.card,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 25px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.discount && (
        <div style={productCardStyles.discountBadge}>
          {product.discount}
        </div>
      )}
      
      <div style={productCardStyles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            ...productCardStyles.image,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>

      <div style={productCardStyles.content}>
        <h3 style={productCardStyles.name}>{product.name}</h3>
        
        <div style={productCardStyles.rating}>
          {renderStars(product.rating)}
          <span style={productCardStyles.ratingText}>({product.rating})</span>
        </div>

        <div style={productCardStyles.priceContainer}>
          <span style={productCardStyles.price}>₹{product.price}</span>
          {product.originalPrice && (
            <span style={productCardStyles.originalPrice}>₹{product.originalPrice}</span>
          )}
        </div>

        <button
          style={{
            ...productCardStyles.button,
            backgroundColor: isAdding ? '#27ae60' : (isHovered ? '#e67e22' : '#ff6b35'),
            transform: isAdding ? 'scale(0.95)' : 'scale(1)'
          }}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          <i className="fas fa-shopping-cart"></i> {isAdding ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;