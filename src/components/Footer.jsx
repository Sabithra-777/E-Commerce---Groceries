import { useNavigate } from "react-router-dom";
import { footerStyles } from "./Footer.styles";
import CategorySection from "./CategorySection";
import ContactSection from "./ContactSection";

const Footer = () => {
  const navigate = useNavigate();

  const allCategories = [
    "Grocery", "Fruits & Vegetables", "Dairy & Bakery", 
    "Beverages", "Snacks & Branded Foods", "Personal Care"
  ];

  const popularCategories = [
    "Fresh Vegetables", "Fresh Fruits", "Cooking Essentials", 
    "Dairy Products", "Organic Foods", "Health & Wellness"
  ];

  const customerAccount = [
    "My Account", "My Orders", "Wishlist", 
    "Delivery Addresses", "FreshCart Wallet"
  ];

  const helpSupport = [
    "About Us", "FAQ", "Terms & Conditions", 
    "Privacy Policy", "Cancellation & Return Policy", "Contact Us"
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <CategorySection 
          title="All Categories" 
          items={allCategories}
          onItemClick={handleCategoryClick}
        />
        
        <CategorySection 
          title="Popular Categories" 
          items={popularCategories}
          onItemClick={handleCategoryClick}
        />
        
        <CategorySection 
          title="Customer Account" 
          items={customerAccount}
        />
        
        <CategorySection 
          title="Help & Support" 
          items={helpSupport}
        />
        
        <ContactSection />
      </div>

      <div style={footerStyles.bottomBar}>
        <p style={footerStyles.copyright}>
          © 2024 FreshCart. All rights reserved. | Groceries Ecommerce App
        </p>
      </div>
    </footer>
  );
};

export default Footer;