import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-17.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useShop();

const subtotal = cart.reduce(
  (total, item) => total + item.price,
  0
);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    navigate("/review-order", {
      state: form,
    });
  };

  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[300px] overflow-hidden">

        <img
          src={heroImage}
          alt="Checkout"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Secure Checkout
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              Shipping Details
            </h1>

          </div>

        </div>

      </section>

      {/* Form */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">

<form
          onSubmit={handleContinue}
          className="bg-gray-50 p-10 rounded-3xl shadow-sm space-y-6"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <textarea
            name="address"
            rows="4"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4"
            required
          />

          <div>

            <label className="font-semibold">
              Payment Method
            </label>

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 mt-3"
            >
              <option>Cash on Delivery</option>
            </select>

          </div>

          <button
            className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
          >
            Continue
          </button>

        </form>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 h-fit sticky top-28">

  <h2 className="text-2xl font-semibold">
    Order Summary
  </h2>

  <div className="space-y-6 mt-8">

    {cart.map((item) => (

      <div
        key={item.id}
        className="flex gap-4"
      >

        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 rounded-2xl object-cover"
        />

        <div>

          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-500">
            {item.category}
          </p>

          <p className="font-semibold mt-2">
            PKR {item.price.toLocaleString()}
          </p>

        </div>

      </div>

    ))}

  </div>

  <hr className="my-8" />

  <div className="flex justify-between">

    <span>Items</span>

    <span>{cart.length}</span>

  </div>

  <div className="flex justify-between mt-4">

    <span>Shipping</span>

    <span>FREE</span>

  </div>

  <div className="flex justify-between mt-4">

    <span>Subtotal</span>

    <span>
      PKR {subtotal.toLocaleString()}
    </span>

  </div>

  <hr className="my-8" />

  <div className="flex justify-between text-xl font-semibold">

    <span>Total</span>

    <span>
      PKR {subtotal.toLocaleString()}
    </span>

  </div>

</div>
</div>

      </section>

    </MainLayout>
  );
}

export default Checkout;