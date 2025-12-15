export const productCardStyles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid #f0f0f0",
  },

  discountBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    backgroundColor: "#e74c3c",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    zIndex: 2,
    animation: "pulse 2s infinite",
  },

  imageContainer: {
    position: "relative",
    overflow: "hidden",
    height: "200px",
    backgroundColor: "#f8f9fa",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  content: {
    padding: "20px",
  },

  name: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#2c3e50",
    lineHeight: "1.3",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "12px",
  },

  ratingText: {
    fontSize: "14px",
    color: "#7f8c8d",
    fontWeight: "500",
  },

  priceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },

  price: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#e74c3c",
  },

  originalPrice: {
    fontSize: "16px",
    color: "#95a5a6",
    textDecoration: "line-through",
  },

  unit: {
    fontSize: "12px",
    color: "#7f8c8d",
    fontWeight: "400",
    marginLeft: "4px",
  },

  button: {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#ff6b35",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(255,107,53,0.2)",
  },
};

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);