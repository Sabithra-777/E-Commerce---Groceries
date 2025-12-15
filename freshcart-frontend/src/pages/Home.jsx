import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { homeStyles } from "./Home.styles";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const banners = [
    {
      title: "Fresh Groceries Delivered",
      subtitle: "Get farm-fresh produce at your doorstep",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop&crop=center"
    },
    {
      title: "Organic & Natural",
      subtitle: "Premium quality organic products",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1200&h=400&fit=crop&crop=center"
    }
  ];

  const products = [
    {
      _id: "1",
      name: "Fresh Red Tomatoes",
      price: 45,
      originalPrice: 55,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      discount: "18% OFF",
      category: "Vegetables",
      unit: "1 kg"
    },
    {
      _id: "2",
      name: "Amul Fresh Milk",
      price: 28,
      originalPrice: 32,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      discount: "12% OFF",
      category: "Dairy",
      unit: "500 ml"
    },
    {
      _id: "3",
      name: "Premium Basmati Rice",
      price: 65,
      originalPrice: 75,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&crop=center",
      rating: 4.4,
      discount: "13% OFF",
      category: "Grains",
      unit: "1 kg"
    },
    {
      _id: "4",
      name: "Organic Bananas",
      price: 30,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      discount: "14% OFF",
      category: "Fruits",
      unit: "1 dozen"
    },
    {
      _id: "5",
      name: "Shimla Green Apples",
      price: 85,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      discount: "10% OFF",
      category: "Fruits",
      unit: "1 kg"
    },
    {
      _id: "6",
      name: "Fresh Carrots",
      price: 35,
      originalPrice: 40,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop&crop=center",
      rating: 4.4,
      discount: "12% OFF"
    },
    {
      _id: "7",
      name: "Fresh Onions",
      price: 20,
      originalPrice: 25,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop&crop=center",
      rating: 4.2,
      discount: "20% OFF"
    },
    {
      _id: "8",
      name: "Fresh Potatoes",
      price: 15,
      originalPrice: 20,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop&crop=center",
      rating: 4.3,
      discount: "25% OFF"
    },
    {
      _id: "9",
      name: "Organic Baby Spinach",
      price: 15,
      originalPrice: 18,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      discount: "17% OFF",
      category: "Leafy Greens",
      unit: "250g"
    },
    {
      _id: "10",
      name: "Farm Fresh Eggs",
      price: 55,
      originalPrice: 60,
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      discount: "8% OFF",
      category: "Dairy & Eggs",
      unit: "12 pieces"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div style={homeStyles.loadingContainer}>
        <div style={homeStyles.spinner}></div>
        <p style={homeStyles.loadingText}>Loading fresh groceries...</p>
      </div>
    );
  }

  const categories = [
    "Fruits & Vegetables", "Foodgrains, Oil & Masala", "Bakery, Cakes & Dairy", 
    "Beverages", "Snacks & Branded Foods", "Eggs, Meat & Fish"
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div style={homeStyles.container}>
      {/* Categories */}
      <div style={homeStyles.categoriesSection}>
        <h3 style={homeStyles.categoryTitle}>Shop by Category</h3>
        <div style={homeStyles.categoriesGrid}>
          {categories.map((category, index) => {
            const categoryIcons = {
              "Fruits & Vegetables": "🥕",
              "Foodgrains, Oil & Masala": "🌾",
              "Bakery, Cakes & Dairy": "🥛",
              "Beverages": "🥤",
              "Snacks & Branded Foods": "🍿",
              "Eggs, Meat & Fish": "🥚"
            };
            return (
              <div 
                key={index} 
                style={homeStyles.categoryCard}
                onClick={() => handleCategoryClick(category)}
              >
                <div style={homeStyles.categoryIcon}>{categoryIcons[category]}</div>
                <span style={homeStyles.categoryText}>{category}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Banner */}
      <div style={homeStyles.heroSection}>
        <div 
          style={{
            ...homeStyles.heroBanner,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banners[currentBanner].image})`
          }}
        >
          <div style={homeStyles.heroContent}>
            <h1 style={homeStyles.heroTitle}>{banners[currentBanner].title}</h1>
            <p style={homeStyles.heroSubtitle}>{banners[currentBanner].subtitle}</p>
            <button style={homeStyles.heroButton} onClick={() => navigate('/category/Fruits & Vegetables')}>Shop Now</button>
          </div>
        </div>
        <div style={homeStyles.bannerDots}>
          {banners.map((_, index) => (
            <div 
              key={index}
              style={{
                ...homeStyles.dot,
                backgroundColor: index === currentBanner ? '#ff6b35' : '#ccc'
              }}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div style={homeStyles.productsSection}>
        <h2 style={homeStyles.sectionTitle}>Fresh Groceries</h2>
        <p style={homeStyles.sectionSubtitle}>Handpicked fresh produce delivered to your door</p>
        
        <div style={homeStyles.grid}>
          {products.map((product, index) => (
            <div 
              key={product._id}
              style={{
                ...homeStyles.productWrapper,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
