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
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav style={navbarStyles.nav}>
      <div style={navbarStyles.leftSection}>
        <div style={navbarStyles.brand} onClick={() => navigate('/')}>FreshCart</div>
        
        <div style={navbarStyles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            style={navbarStyles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button style={navbarStyles.searchButton} onClick={handleSearch}><i className="fas fa-search"></i></button>
        </div>
      </div>

      <div style={navbarStyles.rightSection}>
        <div style={navbarStyles.deliveryInfo}>
          <i className="fas fa-bolt"></i> Delivery in 10 mins
        </div>
        
        <button style={navbarStyles.locationBtn} onClick={() => navigate('/location')}>
          <i className="fas fa-map-marker-alt"></i> Select Location
        </button>

        <div style={navbarStyles.navLinks}>
          <a href="/" style={navbarStyles.link}>Home</a>
          <a href="/cart" style={navbarStyles.cartLink}>
            <i className="fas fa-shopping-cart"></i> Cart ({cart.length})
          </a>
          
          {user ? (
            <>
              <span style={navbarStyles.link}>Hi, {user.name}</span>
              <button style={navbarStyles.loginBtn} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button style={navbarStyles.loginBtn} onClick={() => navigate('/login')}>Login</button>
              <button style={navbarStyles.signupBtn} onClick={() => navigate('/login')}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
