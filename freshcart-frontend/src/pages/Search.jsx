import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const { query } = useParams();

  const allProducts = [
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
      _id: "2",
      name: "Organic Milk",
      price: 30,
      originalPrice: 35,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ffffff'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3EMilk%3C/text%3E%3C/svg%3E",
      rating: 4.8,
      discount: "15% OFF"
    },
    {
      _id: "7",
      name: "Fresh Onions",
      price: 20,
      originalPrice: 25,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23e91e63'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='7'%3EOnions%3C/text%3E%3C/svg%3E",
      rating: 4.2,
      discount: "20% OFF"
    }
  ];

  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "40px 60px", minHeight: "calc(100vh - 90px)" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Search Results for "{query}"
      </h1>
      {filteredProducts.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: "18px", color: "#666" }}>
          No products found. Try searching for tomatoes, milk, or onions.
        </p>
      )}
    </div>
  );
};

export default Search;