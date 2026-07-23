import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-17.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import axios from "axios";

function ReviewOrder() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart, clearCart } = useShop();

  const shipping = location.state;

  const user = JSON.parse(localStorage.getItem("user"));

  const subtotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const placeOrder = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/orders",
        {
          user_id: user.id,
          total: subtotal,
          address: shipping.address,
          city: shipping.city,
          postal_code: shipping.postalCode,
          payment_method: shipping.payment,
        }
      );

      clearCart();

      alert("Order placed successfully!");

      navigate("/orders");

    }

    catch (error) {

      alert("Failed to place order.");

      console.log(error);

    }

  };

  return (

    <MainLayout>

      {/* Hero */}

      <section className="relative h-[300px] overflow-hidden">

        <img
          src={heroImage}
          alt="Review Order"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Final Step
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              Review Your Order
            </h1>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-gray-50 rounded-3xl p-8">

              <h2 className="text-2xl font-semibold mb-6">
                Shipping Information
              </h2>

              <div className="space-y-3">

                <p><strong>Name:</strong> {shipping.fullName}</p>

                <p><strong>Phone:</strong> {shipping.phone}</p>

                <p><strong>Email:</strong> {shipping.email}</p>

                <p><strong>Address:</strong> {shipping.address}</p>

                <p><strong>City:</strong> {shipping.city}</p>

                <p><strong>Postal Code:</strong> {shipping.postalCode}</p>

                <p><strong>Payment:</strong> {shipping.payment}</p>

              </div>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <h2 className="text-2xl font-semibold mb-6">
                Items
              </h2>

              <div className="space-y-6">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-5 items-center"
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

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-gray-50 rounded-3xl p-8 h-fit sticky top-28">

            <h2 className="text-2xl font-semibold">
              Order Summary
            </h2>

            <div className="flex justify-between mt-8">

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

            <button
              onClick={placeOrder}
              className="w-full mt-10 bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
            >
              Place Order
            </button>

          </div>

        </div>

      </section>

    </MainLayout>

  );

}

export default ReviewOrder;