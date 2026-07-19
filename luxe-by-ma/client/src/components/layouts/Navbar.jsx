import logo from "../../assets/logo/logo.png";
import { useShop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../SearchModal";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();

const [showMenu, setShowMenu] = useState(false);

const user = JSON.parse(localStorage.getItem("user"));
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist, cart } = useShop();
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-[#B08D57]"
        : "text-gray-800 hover:text-[#B08D57]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          <Link to="/">
  <img
    src={logo}
    alt="LUXE by M.A."
className="h-20 w-auto"  />
</Link>

          {/* Navigation */}
<nav className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em]">           <NavLink to="/">Home</NavLink>

<NavLink to="/collection">Shop</NavLink>

<NavLink to="/about">About</NavLink>

<NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 text-xl text-gray-800">
<button onClick={() => setSearchOpen(true)}>
  <FiSearch className="hover:text-[#B08D57]" />
</button>
            <Link to="/wishlist" className="relative">
  <FiHeart className="hover:text-[#B08D57]" />

  {wishlist.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
      {wishlist.length}
    </span>
  )}
</Link>

            <Link to="/cart" className="relative">
  <FiShoppingBag className="hover:text-[#B08D57]" />

  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
      {cart.length}
    </span>
  )}
</Link>

            {user ? (

  <div className="relative">

    <button
      onClick={() => setShowMenu(!showMenu)}
      className="flex items-center gap-2"
    >
      <FiUser />

      <span className="text-sm">
        {user.full_name}
      </span>
    </button>

    {showMenu && (

  <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border overflow-hidden">

    <div className="px-5 py-4 border-b">

      <p className="font-semibold">
        {user.full_name}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {user.email}
      </p>

    </div>

    <button
      onClick={() => navigate("/profile")}
      className="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
    >
      My Account
    </button>

    <button
      onClick={() => navigate("/orders")}
      className="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
    >
      My Orders
    </button>

    <hr />

    <button
      onClick={() => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

        window.location.reload();

      }}
      className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 transition"
    >
      Logout
    </button>

  </div>

)}

  </div>

) : (

  <Link to="/login">

    <FiUser className="hover:text-[#B08D57]" />

  </Link>

)}
          </div>
        </div>
      </div>
      <SearchModal
  isOpen={searchOpen}
  onClose={() => setSearchOpen(false)}
/>
    </header>
  );
}

export default Navbar;