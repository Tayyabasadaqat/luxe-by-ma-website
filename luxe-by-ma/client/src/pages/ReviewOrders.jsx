import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-17.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import axios from "axios";
import { useState } from "react";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
const [orderNumber, setOrderNumber] = useState(null);
const [orderTotal, setOrderTotal] = useState(0);

  const placeOrder = async () => {

  try {

    const response = await axios.post(
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

    setOrderNumber(response.data.orderId);

    // save total before clearing cart
    setOrderTotal(subtotal);

    clearCart();

    setShowSuccessModal(true);

  } catch (error) {

    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      "Failed to place order."
    );

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
                PKR {orderTotal.toLocaleString()}
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

      {showSuccessModal && (

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white rounded-3xl w-[92%] max-w-lg p-8 text-center shadow-2xl max-h-[90vh] overflow-y-auto">
  
<div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">

<span className="text-5xl text-green-600">
✓
</span>

</div>

<h2 className="text-4xl font-semibold mt-6">
Thank You!
</h2>

<p className="text-gray-600 mt-4 leading-7">
Your order has been placed successfully.
</p>

<div className="bg-gray-50 rounded-2xl p-6 mt-8 text-left space-y-3">

<p>
<strong>Order Number:</strong>
{" "}
LX-{orderNumber}
</p>

<p>
<strong>Estimated Delivery:</strong>
7–15 Business Days
</p>

<p>
<strong>Payment:</strong>
{shipping.payment}
</p>

<p>
<strong>Total:</strong>
PKR {orderTotal.toLocaleString()}
</p>

</div>

<div className="bg-gray-50 rounded-2xl p-6 mt-6 text-left">

<h3 className="font-semibold mb-3">
Shipping Address
</h3>

<p>{shipping.fullName}</p>

<p>{shipping.address}</p>

<p>
{shipping.city} {shipping.postalCode}
</p>

</div>

<div className="flex gap-4 mt-8">

<button
  onClick={() => {
    setShowSuccessModal(false);
    navigate("/collection");
  }}
  className="flex-1 border rounded-full py-3 hover:bg-gray-100 transition"
>
  Continue Shopping
</button>

<button
  onClick={() => {
    setShowSuccessModal(false);
    navigate("/orders");
  }}
  className="flex-1 bg-black text-white rounded-full py-3 hover:bg-[#B08D57] transition"
>
  View My Orders
</button>

</div>

</div>

</div>

)}
    </MainLayout>

  );

}

export default ReviewOrder;