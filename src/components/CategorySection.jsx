import { memo, useCallback } from 'react';
import { categoryStyles } from './CategorySection.styles';

const CategorySection = ({ title, items, onItemClick, activeItem }) => {
  const getItemIcon = useCallback((item) => {
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
  }, []);

  const handleItemClick = useCallback((item) => {
    onItemClick?.(item);
  }, [onItemClick]);

  const handleKeyDown = useCallback((e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  }, [handleItemClick]);

  return (
    <div style={categoryStyles.section} role="navigation" aria-label={`${title} categories`}>
      <h3 style={categoryStyles.title}>{title}</h3>
      <ul style={categoryStyles.list} role="list">
        {items.map((item) => {
          const isActive = activeItem === item;
          const itemStyles = {
            ...categoryStyles.listItem,
            ...(isActive && categoryStyles.activeItem)
          };
          return (
            <li
              key={item}
              style={itemStyles}
              role="button"
              tabIndex={0}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Navigate to ${item}`}
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => handleKeyDown(e, item)}
            >
              <span style={categoryStyles.itemIcon} aria-hidden="true">
                {getItemIcon(item)}
              </span>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(CategorySection);
