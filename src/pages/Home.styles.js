export const homeStyles = {
  container: {
    backgroundColor: "#f8f9fa",
    minHeight: "calc(100vh - 80px)",
  },

  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 80px)",
    backgroundColor: "#f8f9fa",
  },

  spinner: {
    width: "50px",
    height: "50px",
    border: "4px solid #e3e3e3",
    borderTop: "4px solid #ff6b35",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#666",
  },

  heroSection: {
    position: "relative",
    marginBottom: "40px",
  },

  heroBanner: {
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.8s ease-in-out",
  },

  heroContent: {
    textAlign: "center",
    color: "white",
    animation: "fadeInUp 1s ease-out",
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },

  heroSubtitle: {
    fontSize: "20px",
    marginBottom: "24px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },

  heroButton: {
    padding: "12px 32px",
    fontSize: "18px",
    backgroundColor: "#ff6b35",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
  },

  bannerDots: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  },

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    backgroundColor: "white",
    borderBottom: "1px solid #eee",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    maxWidth: "500px",
  },

  searchInput: {
    flex: 1,
    padding: "12px 16px",
    border: "2px solid #ddd",
    borderRadius: "25px",
    fontSize: "16px",
    outline: "none",
  },

  searchButton: {
    padding: "12px 16px",
    backgroundColor: "#ff6b35",
    color: "white",
    border: "none",
    borderRadius: "50%",
    marginLeft: "10px",
    cursor: "pointer",
  },

  locationInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  deliveryInfo: {
    fontSize: "14px",
    color: "#27ae60",
    fontWeight: "600",
  },

  location: {
    fontSize: "14px",
    color: "#666",
    cursor: "pointer",
  },

  locationBtn: {
    padding: "8px 16px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
  },

  loginBtn: {
    padding: "8px 16px",
    backgroundColor: "#ff6b35",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
  },

  categoriesSection: {
    padding: "30px 60px",
    backgroundColor: "white",
  },

  categoryTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#2c3e50",
  },

  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },

  categoryCard: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "14px",
    fontWeight: "500",
    border: "1px solid #e0e0e0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },

  categoryIcon: {
    fontSize: "32px",
    marginBottom: "4px",
  },

  categoryText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#2c3e50",
    lineHeight: "1.3",
  },

  productsSection: {
    padding: "40px 60px",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "8px",
    color: "#2c3e50",
  },

  sectionSubtitle: {
    fontSize: "16px",
    textAlign: "center",
    color: "#7f8c8d",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },

  '@media (max-width: 768px)': {
    container: {
      padding: "20px 15px",
    },
    categoriesSection: {
      padding: "20px 15px",
    },
    productsSection: {
      padding: "30px 15px",
    },
    grid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    categoriesGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "15px",
    },
  },

  productWrapper: {
    animation: "slideInUp 0.6s ease-out forwards",
    opacity: 0,
    transform: "translateY(30px)",
  },
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);