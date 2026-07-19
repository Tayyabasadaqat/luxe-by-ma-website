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

import ScrollToTop from "../components/ScrollToTop";

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
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;