import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-18.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useShop } from "../context/ShopContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { loadCart, loadWishlist } = useShop();
 const [form, setForm] = useState({
  email: "",
  password: "",
});

const [showPopup, setShowPopup] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    localStorage.setItem("token", response.data.token);

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );
    await loadCart();
    await loadWishlist();

    setShowPopup(true);

setTimeout(() => {
  setShowPopup(false);
}, 2000);
    navigate("/");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login failed."
    );

  }
};

  return (

    <MainLayout>
      {showPopup && (
  <div className="fixed top-6 right-6 bg-black text-white px-6 py-4 rounded-xl shadow-lg z-50">
    Login successful ✨
  </div>
)}

      {/* Hero */}

      <section className="relative h-[350px] overflow-hidden">

        <img
          src={heroImage}
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Welcome Back
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              Sign In
            </h1>

          </div>

        </div>

      </section>

      {/* Form */}

      <section className="max-w-lg mx-auto px-6 py-20">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-3xl shadow-sm space-y-6"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-[#B08D57]"
            >
              Forgot Password?
            </button>

          </div>

          <button
            className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
          >
            Login
          </button>

          <p className="text-center text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-[#B08D57] ml-2"
            >
              Register
            </Link>

          </p>

        </form>

      </section>

    </MainLayout>
  );
}

export default Login;