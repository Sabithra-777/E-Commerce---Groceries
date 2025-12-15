// Main application component
// Handles routing and overall layout of the application
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Location from "./pages/Location";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/location" element={<Location />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
