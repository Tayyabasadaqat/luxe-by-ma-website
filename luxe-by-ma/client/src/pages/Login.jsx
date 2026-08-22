import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-18.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  // ============================
  // LOGIN
  // ============================

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ============================
  // FORGOT PASSWORD
  // ============================

  const [showForgotModal, setShowForgotModal] = useState(false);

  const [resetForm, setResetForm] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // ============================
  // LOGIN INPUT CHANGE
  // ============================

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  // ============================
  // LOGIN
  // ============================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    // ============================
    // ADMIN LOGIN
    // ============================

    try {

      const adminResponse = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username: form.email,
          password: form.password,
        }
      );

      if (adminResponse.data.success) {

        sessionStorage.setItem(
          "adminLoggedIn",
          "true"
        );

        navigate("/admin");

        return;
      }

    } catch (adminError) {

      // Not admin.
      // Continue with customer login.

    }


    // ============================
    // CUSTOMER LOGIN
    // ============================

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Invalid email or password."
      );

    }

  };


  // ============================
  // RESET INPUT CHANGE
  // ============================

  const handleResetChange = (e) => {

    setResetForm({
      ...resetForm,
      [e.target.name]: e.target.value,
    });

  };


  // ============================
  // RESET PASSWORD
  // ============================

  const handleResetPassword = async (e) => {

    e.preventDefault();

    setResetMessage("");
    setResetError("");

    // Check passwords

    if (
      resetForm.newPassword !==
      resetForm.confirmPassword
    ) {

      setResetError(
        "Passwords do not match."
      );

      return;
    }


    // Minimum password length

    if (resetForm.newPassword.length < 6) {

      setResetError(
        "Password must be at least 6 characters."
      );

      return;
    }


    try {

      const response = await axios.put(
        "http://localhost:5000/api/auth/reset-password",
        {
          email: resetForm.email,
          newPassword: resetForm.newPassword,
        }
      );


      setResetMessage(
        response.data.message
      );


      // Clear form

      setResetForm({
        email: "",
        newPassword: "",
        confirmPassword: "",
      });


      // Close popup after 2 seconds

      setTimeout(() => {

        setShowForgotModal(false);
        setResetMessage("");

      }, 2000);


    } catch (error) {

      setResetError(
        error.response?.data?.message ||
        "Unable to reset password."
      );

    }

  };


  return (

    <MainLayout>

      {/* ============================
          HERO
      ============================ */}

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


      {/* ============================
          LOGIN FORM
      ============================ */}

      <section className="max-w-lg mx-auto px-6 py-20">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-3xl shadow-sm space-y-6"
        >

          {/* EMAIL */}

          <input
            type="text"
            name="email"
            placeholder="Email Address or Admin Username"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            required
          />


          {/* PASSWORD */}

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >

              {showPassword ? "🙈" : "👁️"}

            </button>

          </div>


          {/* ERROR */}

          {error && (

            <p className="text-red-500 text-sm text-center">
              {error}
            </p>

          )}


          {/* OPTIONS */}

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember Me

            </label>


            <button
              type="button"
              onClick={() => {

                setShowForgotModal(true);
                setResetError("");
                setResetMessage("");

              }}
              className="text-[#B08D57] hover:underline"
            >
              Forgot Password?
            </button>

          </div>


          {/* LOGIN */}

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
          >
            Login
          </button>


          {/* REGISTER */}

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


      {/* ============================
          FORGOT PASSWORD MODAL
      ============================ */}

      {showForgotModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-5">

          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl">

            {/* CLOSE */}

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-semibold">
                Reset Password
              </h2>

              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="text-gray-400 hover:text-black text-2xl"
              >
                ×
              </button>

            </div>


            <p className="text-gray-500 text-sm mt-2">
              Enter your email and create a new password.
            </p>


            <form
              onSubmit={handleResetPassword}
              className="space-y-5 mt-6"
            >

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={resetForm.email}
                onChange={handleResetChange}
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                required
              />


              {/* NEW PASSWORD */}

              <div className="relative">

                <input
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  name="newPassword"
                  placeholder="Create New Password"
                  value={resetForm.newPassword}
                  onChange={handleResetChange}
                  className="w-full border rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-black"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(!showNewPassword)
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showNewPassword ? "🙈" : "👁️"}
                </button>

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Write Password Again"
                  value={resetForm.confirmPassword}
                  onChange={handleResetChange}
                  className="w-full border rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-black"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>

              </div>


              {/* ERROR */}

              {resetError && (

                <p className="text-red-500 text-sm text-center">
                  {resetError}
                </p>

              )}


              {/* SUCCESS */}

              {resetMessage && (

                <p className="text-green-600 text-sm text-center">
                  {resetMessage}
                </p>

              )}


              {/* RESET BUTTON */}

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
              >
                Update Password
              </button>

            </form>

          </div>

        </div>

      )}

    </MainLayout>

  );

}

export default Login;