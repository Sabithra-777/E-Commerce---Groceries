export const navbarStyles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
    flexWrap: "wrap",
    gap: "10px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    flexWrap: "wrap",
  },

  brand: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2e7d32",
    cursor: "pointer",
    letterSpacing: "-0.5px",
    userSelect: "none",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "380px",
    maxWidth: "100%",
  },

  searchInput: {
    width: "100%",
    padding: "12px 20px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },

  searchButton: {
    position: "absolute",
    right: "8px",
    padding: "8px 14px",
    backgroundColor: "#ff6b35",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  deliveryInfo: {
    fontSize: "12px",
    color: "#27ae60",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    whiteSpace: "nowrap",
  },

  locationBtn: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#666",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.2s",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  link: {
    color: "#333",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "8px 0",
    background: "none",
    border: "none",
    transition: "color 0.2s",
  },

  cartLink: {
    color: "#333",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "8px 16px",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    background: "none",
    transition: "all 0.2s",
  },

  loginBtn: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#2e7d32",
    border: "1px solid #2e7d32",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.2s",
  },

  signupBtn: {
    padding: "10px 20px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.2s",
  },
};
