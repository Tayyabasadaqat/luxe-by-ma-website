import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-18.png";
import { Link } from "react-router-dom";

function Orders() {
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

      {/* Orders */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-gray-50 rounded-3xl shadow-sm p-12 text-center">

          <h2 className="text-3xl font-semibold">
            No Orders Yet
          </h2>

          <p className="text-gray-600 mt-4">
            You haven't placed any orders yet.
            Start shopping to see your orders here.
          </p>

          <Link
            to="/collection"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-[#B08D57] transition"
          >
            Continue Shopping
          </Link>

        </div>

      </section>

    </MainLayout>
  );
}

export default Orders;