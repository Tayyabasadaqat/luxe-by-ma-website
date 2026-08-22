import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      if (response.data.success) {

        sessionStorage.setItem(
          "adminLoggedIn",
          "true"
        );

        navigate("/admin");

      }

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Invalid admin credentials."
      );

    }

  };


  return (
    <MainLayout>

      <section className="max-w-lg mx-auto px-6 py-24">

        <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">

          <div className="text-center mb-10">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Luxe by M.A
            </p>

            <h1 className="text-4xl font-semibold mt-3">
              Admin Login
            </h1>

            <p className="text-gray-500 mt-3">
              Authorized personnel only
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="username"
              placeholder="Admin Username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Admin Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              required
            />

            {error && (

              <p className="text-red-500 text-center">
                {error}
              </p>

            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
            >
              Access Dashboard
            </button>

          </form>

        </div>

      </section>

    </MainLayout>
  );
}

export default AdminLogin;