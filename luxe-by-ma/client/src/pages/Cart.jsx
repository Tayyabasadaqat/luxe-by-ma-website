import MainLayout from "../layouts/MainLayout";
import { useShop } from "../context/ShopContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
const {
  cart,
  removeFromCart,
} = useShop();
  const subtotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );
  const navigate = useNavigate();
const [showLoginModal, setShowLoginModal] = useState(false);
const user = JSON.parse(localStorage.getItem("user"));

const handleCheckout = () => {

  if (!user) {
    setShowLoginModal(true);
    return;
  }

  navigate("/checkout");

};
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Shopping Cart
          </p>

          <h1 className="text-5xl font-semibold mt-3">
            Your Cart
          </h1>

        </div>

        {cart.length === 0 ? (

          <div className="text-center py-24">

            <h2 className="text-3xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-4">
              Start shopping to add your favorite handbags.
            </p>

            <Link
              to="/collection"
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-[#B08D57] transition"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Cart Items */}

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-6 bg-gray-50 rounded-3xl p-6"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-36 object-cover rounded-2xl"
                  />

                  <div className="flex-1">

                    <p className="text-gray-500">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-semibold mt-2">
                      {item.name}
                    </h3>

                    <p className="mt-3 font-semibold">
                      PKR {item.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-6 text-red-500 hover:underline"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Summary */}

            <div className="bg-gray-50 rounded-3xl p-8 h-fit">

              <h2 className="text-2xl font-semibold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-8">

                <span>Items</span>

                <span>{cart.length}</span>

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
              <button
                onClick={handleCheckout}
                className="w-full mt-10 bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/collection"
                className="block text-center mt-6 text-[#B08D57] hover:underline"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </section>
      {showLoginModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

    <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center">

      <h2 className="text-3xl font-semibold">
        Sign In Required
      </h2>

      <p className="text-gray-600 mt-4 leading-7">
        Please sign in to your account before proceeding to checkout.
      </p>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setShowLoginModal(false)}
          className="flex-1 border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setShowLoginModal(false);
            navigate("/login");
          }}
          className="flex-1 bg-black text-white py-3 rounded-full hover:bg-[#B08D57] transition"
        >
          Sign In
        </button>

      </div>

    </div>

  </div>
)}
    </MainLayout>
  );
}

export default Cart;