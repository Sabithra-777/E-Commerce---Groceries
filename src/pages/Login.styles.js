export const loginStyles = {
  container: {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },

  loginBox: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "8px",
    textAlign: "center",
  },

  subtitle: {
    fontSize: "14px",
    color: "#7f8c8d",
    marginBottom: "32px",
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#2c3e50",
  },

  input: {
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  },

  button: {
    padding: "14px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "10px",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0",
    color: "#bdc3c7",
    fontSize: "14px",
  },

  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e0e0e0",
  },

  dividerText: {
    padding: "0 16px",
  },

  socialButton: {
    padding: "12px",
    backgroundColor: "white",
    color: "#2c3e50",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },

  switchText: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "14px",
    color: "#7f8c8d",
  },

  switchLink: {
    color: "#2e7d32",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
  },
};