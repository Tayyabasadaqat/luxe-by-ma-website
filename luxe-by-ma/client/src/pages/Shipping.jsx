import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-20.png";
import {
  FaShippingFast,
  FaClock,
  FaBoxOpen,
  FaMapMarkedAlt,
} from "react-icons/fa";

function Shipping() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[420px] overflow-hidden">

        <img
          src={heroImage}
          alt="Shipping"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Customer Care
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Shipping & Delivery
            </h1>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaClock className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Order Processing
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Orders are processed within 1–2 business days after confirmation.
              During promotional periods, processing may take slightly longer.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaShippingFast className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Delivery Time
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Major cities typically receive orders within 2–4 business days,
              while other regions may take 3–7 business days.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaMapMarkedAlt className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Nationwide Shipping
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              We proudly deliver to customers across Pakistan through trusted
              courier partners to ensure safe and timely delivery.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaBoxOpen className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Order Tracking
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Once your order has been dispatched, you will receive a tracking
              number via email or SMS so you can monitor its delivery.
            </p>

          </div>

        </div>

      </section>

      {/* Information */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white border rounded-3xl p-10">

          <h2 className="text-3xl font-semibold">
            Shipping Information
          </h2>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 list-disc pl-6">

            <li>Orders are shipped Monday through Saturday.</li>

            <li>Delivery times may vary due to weather or public holidays.</li>

            <li>Please ensure your shipping address is accurate before placing your order.</li>

            <li>Cash on Delivery (COD) is currently available across Pakistan.</li>

            <li>Customers will be contacted if any delivery issues arise.</li>

          </ul>

        </div>

      </section>

    </MainLayout>
  );
}

export default Shipping;