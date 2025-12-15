import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { navbarStyles } from "./Navbar.styles";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search/${query}`);
      setSearchQuery("");
    }
  };

  return (
    <nav style={navbarStyles.nav}>
   
      <div style={navbarStyles.leftSection}>
        <div
          style={navbarStyles.brand}
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
        >
          FreshCart
        </div>

        <div style={navbarStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            style={navbarStyles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            aria-label="Search products"
          />
          <button
            style={navbarStyles.searchButton}
            onClick={handleSearch}
            aria-label="Search"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      
      <div style={navbarStyles.rightSection}>
        <div style={navbarStyles.deliveryInfo}>
          <i className="fas fa-bolt"></i> Delivery in 10 mins
        </div>

        <button
          style={navbarStyles.locationBtn}
          onClick={() => navigate("/location")}
        >
          <i className="fas fa-map-marker-alt"></i> Select Location
        </button>

        <div style={navbarStyles.navLinks}>
          <button
            style={navbarStyles.link}
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <button
            style={navbarStyles.cartLink}
            onClick={() => navigate("/cart")}
          >
            <i className="fas fa-shopping-cart"></i>{" "}
            Cart ({cart?.length || 0})
          </button>

          {user ? (
            <>
              <span style={navbarStyles.link}>Hi, {user.name}</span>
              <button
                style={navbarStyles.loginBtn}
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                style={navbarStyles.loginBtn}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                style={navbarStyles.signupBtn}
                onClick={() => navigate("/login")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
