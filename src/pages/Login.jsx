import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginStyles } from "./Login.styles";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      name: isLogin ? formData.email.split("@")[0] : formData.name,
      email: formData.email,
      role: "user",
    };

    login(userData);
    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.loginBox}>
        <h2 style={loginStyles.title}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p style={loginStyles.subtitle}>
          {isLogin ? "Enter your details to access your account" : "Create your account to get started"}
        </p>

        <form style={loginStyles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={loginStyles.inputGroup}>
              <label style={loginStyles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                style={loginStyles.input}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div style={loginStyles.inputGroup}>
            <label style={loginStyles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              style={loginStyles.input}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div style={loginStyles.inputGroup}>
              <label style={loginStyles.label}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                style={loginStyles.input}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div style={loginStyles.inputGroup}>
            <label style={loginStyles.label}>Password</label>
            <input
              type="password"
              name="password"
              style={loginStyles.input}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" style={loginStyles.button}>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div style={loginStyles.divider}>
          <div style={loginStyles.dividerLine}></div>
          <span style={loginStyles.dividerText}>or</span>
          <div style={loginStyles.dividerLine}></div>
        </div>

        <button style={loginStyles.socialButton}>
          📱 Continue with Phone
        </button>

        <div style={loginStyles.switchText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            style={loginStyles.switchLink}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;