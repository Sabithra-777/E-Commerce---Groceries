import { categoryStyles } from "./CategorySection.styles";

const CategorySection = ({ title, items, onItemClick }) => {
  const getItemIcon = (item) => {
    const iconMap = {
      "Grocery": "🛒",
      "Fruits & Vegetables": "🥕",
      "Dairy & Bakery": "🥛",
      "Beverages": "🥤",
      "Snacks & Branded Foods": "🍿",
      "Personal Care": "🧴",
      "Fresh Vegetables": "🥬",
      "Fresh Fruits": "🍎",
      "Cooking Essentials": "🧂",
      "Dairy Products": "🧀",
      "Organic Foods": "🌱",
      "Health & Wellness": "💊",
      "My Account": "👤",
      "My Orders": "📦",
      "Wishlist": "❤️",
      "Delivery Addresses": "📍",
      "FreshCart Wallet": "💳",
      "About Us": "ℹ️",
      "FAQ": "❓",
      "Terms & Conditions": "📋",
      "Privacy Policy": "🔒",
      "Cancellation & Return Policy": "↩️",
      "Contact Us": "📞"
    };
    return iconMap[item] || "📄";
  };

  return (
    <div style={categoryStyles.section}>
      <h3 style={categoryStyles.title}>{title}</h3>
      <ul style={categoryStyles.list}>
        {items.map((item, index) => (
          <li 
            key={index} 
            style={categoryStyles.listItem}
            onClick={() => onItemClick && onItemClick(item)}
          >
            <span style={categoryStyles.itemIcon}>{getItemIcon(item)}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;