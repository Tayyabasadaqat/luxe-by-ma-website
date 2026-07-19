import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-17.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        full_name: form.name,
        email: form.email,
        password: form.password,
      }
    );

    alert(response.data.message);

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/login");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Registration failed."
    );
  }
};

  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[350px] overflow-hidden">

        <img
          src={heroImage}
          alt="Register"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Join Our Community
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              Create Account
            </h1>

          </div>

        </div>

      </section>

      {/* Register Form */}

      <section className="max-w-lg mx-auto px-6 py-20">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-3xl shadow-sm space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Password */}

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          {/* Confirm Password */}

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
          >
            Create Account
          </button>

          <p className="text-center text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-[#B08D57] ml-2"
            >
              Login
            </Link>

          </p>

        </form>

      </section>

    </MainLayout>
  );
}

export default Register;