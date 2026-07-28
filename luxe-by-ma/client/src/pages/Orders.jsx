import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-18.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    if (!user) return;

    axios
      .get(`http://localhost:5000/api/orders/${user.id}`)
      .then((response) => {

        setOrders(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[350px] overflow-hidden">

        <img
          src={heroImage}
          alt="Orders"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Your Purchases
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              My Orders
            </h1>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">

        {orders.length === 0 ? (

          <div className="bg-gray-50 rounded-3xl shadow-sm p-12 text-center">

            <h2 className="text-3xl font-semibold">
              No Orders Yet
            </h2>

            <p className="text-gray-600 mt-4">
              You haven't placed any orders yet.
            </p>

            <Link
              to="/collection"
              className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-[#B08D57] transition"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="space-y-8">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-2xl font-semibold">
                      Order #{order.id}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>

                  </div>

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                    {order.status}
                  </span>

                </div>

                <hr className="my-6" />

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <p>
                      <strong>Address:</strong>
                    </p>

                    <p>{order.address}</p>

                    <p>{order.city}</p>

                    <p>{order.postal_code}</p>

                  </div>

                  <div>

                    <p>
                      <strong>Payment:</strong>
                    </p>

                    <p>{order.payment_method}</p>

                    <p className="mt-4 text-xl font-semibold">
                      PKR {Number(order.total).toLocaleString()}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </MainLayout>
  );
}

export default Orders;