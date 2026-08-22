import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Productdetails from "../pages/Productdetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Notfound from "../pages/Notfound";
import FAQ from "../pages/FAQ";
import Shipping from "../pages/Shipping";
import Returns from "../pages/Returns";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import ScrollToTop from "../components/ScrollToTop";
import Checkout from "../pages/Checkout";
import ReviewOrder from "../pages/ReviewOrders";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";

function Approuter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/review-order" element={<ReviewOrder />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;