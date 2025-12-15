import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { categoryName } = useParams();

  const categoryProducts = {
    "Fruits & Vegetables": [
      {
        _id: "1",
        name: "Fresh Tomatoes",
        price: 40,
        originalPrice: 50,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ff6b6b'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='7'%3ETomatoes%3C/text%3E%3C/svg%3E",
        rating: 4.5,
        discount: "20% OFF"
      },
      {
        _id: "4",
        name: "Fresh Bananas",
        price: 25,
        originalPrice: 30,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ffeb3b'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3EBananas%3C/text%3E%3C/svg%3E",
        rating: 4.6,
        discount: "17% OFF"
      },
      {
        _id: "5",
        name: "Green Apples",
        price: 80,
        originalPrice: 90,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%234caf50'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='7'%3EApples%3C/text%3E%3C/svg%3E",
        rating: 4.7,
        discount: "11% OFF"
      }
    ],
    "Foodgrains, Oil & Masala": [
      {
        _id: "3",
        name: "Basmati Rice",
        price: 60,
        originalPrice: 70,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f4e4bc'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3ERice%3C/text%3E%3C/svg%3E",
        rating: 4.3,
        discount: "14% OFF"
      }
    ],
    "Bakery, Cakes & Dairy": [
      {
        _id: "2",
        name: "Organic Milk",
        price: 30,
        originalPrice: 35,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ffffff'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3EMilk%3C/text%3E%3C/svg%3E",
        rating: 4.8,
        discount: "15% OFF"
      }
    ]
  };

  const products = categoryProducts[categoryName] || [];

  return (
    <div style={{ padding: "40px 60px", minHeight: "calc(100vh - 90px)", backgroundColor: "#f8f9fa" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "8px", color: "#2c3e50" }}>
          {categoryName}
        </h1>
        <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
          {products.length} products available
        </p>
      </div>
      
      {products.length > 0 ? (
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "30px" 
        }}>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <h3 style={{ fontSize: "24px", color: "#666", marginBottom: "16px" }}>Coming Soon!</h3>
          <p style={{ fontSize: "16px", color: "#999" }}>Products for this category will be available soon.</p>
        </div>
      )}
    </div>
  );
};

export default Category;