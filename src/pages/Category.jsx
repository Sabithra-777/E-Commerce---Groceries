import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection';

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const categoryProducts = {
    "Fruits & Vegetables": [
      { _id: "1", name: "Fresh Tomatoes", price: 40, originalPrice: 50, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ff6b6b'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='7'%3ETomatoes%3C/text%3E%3C/svg%3E", rating: 4.5, discount: "20% OFF" },
      { _id: "4", name: "Fresh Bananas", price: 25, originalPrice: 30, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ffeb3b'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3EBananas%3C/text%3E%3C/svg%3E", rating: 4.6, discount: "17% OFF" },
      { _id: "5", name: "Green Apples", price: 80, originalPrice: 90, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%234caf50'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='7'%3EApples%3C/text%3E%3C/svg%3E", rating: 4.7, discount: "11% OFF" }
    ],
    "Foodgrains, Oil & Masala": [
      { _id: "3", name: "Basmati Rice", price: 60, originalPrice: 70, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f4e4bc'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3ERice%3C/text%3E%3C/svg%3E", rating: 4.3, discount: "14% OFF" }
    ],
    "Bakery, Cakes & Dairy": [
      { _id: "2", name: "Organic Milk", price: 30, originalPrice: 35, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23ffffff'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23333' text-anchor='middle' dy='7'%3EMilk%3C/text%3E%3C/svg%3E", rating: 4.8, discount: "15% OFF" }
    ]
  };

  const categories = Object.keys(categoryProducts);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (params.get('sort')) setSortBy(params.get('sort'));
    setLoading(true);
    setTimeout(() => {
      setProducts(categoryProducts[categoryName] || []);
      setLoading(false);
    }, 1200);
  }, [categoryName, searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => 
      p.price >= priceRange[0] && 
      p.price <= priceRange[1] && 
      p.rating >= ratingFilter
    );
    
    return filtered.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });
  }, [products, sortBy, priceRange, ratingFilter]);

  useEffect(() => {
    setFilterCount(
      (priceRange[0] !== 0 || priceRange[1] !== 200 ? 1 : 0) +
      (ratingFilter > 0 ? 1 : 0)
    );
  }, [priceRange, ratingFilter]);

  const handleCategoryClick = useCallback((category) => {
    navigate(`/category/${category}`);
    setShowFilters(false);
  }, [navigate]);

  const clearFilters = () => {
    setSortBy('name');
    setPriceRange([0, 200]);
    setRatingFilter(0);
    setShowFilters(false);
    setSearchParams({});
  };

  const pageStyles = {
    padding: "40px 24px",
    maxWidth: "1440px",
    margin: "0 auto",
    fontFamily: "'Inter', -apple-system, sans-serif",
    background: "#f8fafc"
  };

  const layoutStyles = {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: "32px"
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    padding: "24px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #f1f5f9"
  };

  const statsRow = {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    marginBottom: "8px"
  };

  const badgeStyles = (active = false) => ({
    padding: "4px 12px",
    background: active ? "#3b82f6" : "#f1f5f9",
    color: active ? "#ffffff" : "#64748b",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500"
  });

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        background: "#f8fafc"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px"
        }}>
          <div style={{
            width: "56px",
            height: "56px",
            border: "4px solid #e2e8f0",
            borderTop: "4px solid #3b82f6",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <p style={{ color: "#64748b", margin: 0 }}>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyles}>
      <div style={layoutStyles}>
        <CategorySection
          title="Categories"
          items={categories}
          activeItem={categoryName}
          onItemClick={handleCategoryClick}
        />

        <div>
          <div style={headerStyles}>
            <div>
              <div style={statsRow}>
                <h1 style={{ 
                  fontSize: "32px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  margin: 0
                }}>
                  {categoryName}
                </h1>
                <span style={badgeStyles(true)}>
                  {filteredProducts.length} results
                </span>
              </div>
              <div style={statsRow}>
                <span style={badgeStyles()}>
                  {categories.length} categories
                </span>
                {filterCount > 0 && (
                  <span style={badgeStyles(true)}>
                    {filterCount} active filter{filterCount > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "12px" }}>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: showFilters ? "#3b82f6" : "#f1f5f9",
                  color: showFilters ? "#ffffff" : "#475569",
                  border: "1px solid " + (showFilters ? "#2563eb" : "#e2e8f0"),
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                {showFilters ? "✕ Hide" : "🔧 Filters"}
                {filterCount > 0 && ` (${filterCount})`}
              </button>
              
              <select 
                value={sortBy} 
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setSearchParams({ sort: e.target.value });
                }}
                style={{
                  padding: "12px 20px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  background: "#ffffff",
                  color: "#1e293b",
                  fontSize: "14px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}
              >
                <option value="name">Sort by Name (A-Z)</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Customer Rating (High-Low)</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div style={{
              background: "#ffffff",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #f1f5f9",
              marginBottom: "28px"
            }}>
              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "12px", 
                    fontWeight: "600",
                    color: "#1e293b"
                  }}>
                    💰 Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      style={{ flex: 1 }}
                    />
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "12px", 
                    fontWeight: "600",
                    color: "#1e293b"
                  }}>
                    ⭐ Minimum Rating
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRatingFilter(ratingFilter === star ? 0 : star)}
                        style={{
                          background: ratingFilter >= star ? "#fbbf24" : "#f1f5f9",
                          color: ratingFilter >= star ? "#1f2937" : "#6b7280",
                          border: "none",
                          borderRadius: "6px",
                          padding: "8px 12px",
                          cursor: "pointer",
                          fontSize: "18px",
                          fontWeight: "bold"
                        }}
                      >
                        {ratingFilter === star ? '★' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: "20px", textAlign: "right" }}>
                <button 
                  onClick={clearFilters}
                  style={{
                    padding: "10px 24px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
            gap: "28px" 
          }}>
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "100px 60px",
              background: "#ffffff",
              borderRadius: "20px",
              border: "2px dashed #e2e8f0",
              marginTop: "60px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
              <div style={{
                width: "96px",
                height: "96px",
                background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                borderRadius: "50%",
                margin: "0 auto 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
              }}>
                📦
              </div>
              <h3 style={{ 
                fontSize: "28px", 
                color: "#1e293b", 
                marginBottom: "16px",
                fontWeight: "700"
              }}>
                No products match your filters
              </h3>
              <p style={{ 
                fontSize: "18px", 
                color: "#64748b", 
                marginBottom: "32px",
                lineHeight: "1.6"
              }}>
                Try adjusting your search criteria or browse other categories
              </p>
              <button 
                onClick={clearFilters}
                style={{
                  padding: "16px 40px",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)"
                }}
              >
                🎯 Reset & Browse All
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        input[type="range"] {
          height: 6px;
          border-radius: 3px;
          background: #e2e8f0;
          outline: none;
          -webkit-appearance: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Category;
