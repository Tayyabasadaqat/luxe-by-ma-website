import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-22.png";
import {
  FaFileContract,
  FaShoppingBag,
  FaCreditCard,
  FaBalanceScale,
} from "react-icons/fa";

function Terms() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[420px] overflow-hidden">

        <img
          src={heroImage}
          alt="Terms & Conditions"
className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Customer Care
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Terms & Conditions
            </h1>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaShoppingBag className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Orders
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              All orders are subject to product availability and confirmation.
              We reserve the right to cancel or refuse any order if necessary.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaCreditCard className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Payments
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Prices are listed in Pakistani Rupees (PKR). Payment methods
              available on the website must be completed before order
              processing where applicable.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaFileContract className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Product Information
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              We strive to ensure all product descriptions, images, and prices
              are accurate. Minor variations in color or appearance may occur
              due to photography and screen settings.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaBalanceScale className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Limitation of Liability
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Luxe by M.A. is not liable for delays, interruptions, or damages
              caused by events beyond our reasonable control, including courier
              delays or natural disasters.
            </p>

          </div>

        </div>

      </section>

      {/* Terms */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white border rounded-3xl p-10">

          <h2 className="text-3xl font-semibold">
            General Terms
          </h2>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 list-disc pl-6">

            <li>By using this website, you agree to these Terms & Conditions.</li>

            <li>All content, including logos, images, and text, is the property of Luxe by M.A. and may not be reproduced without permission.</li>

            <li>We reserve the right to update product prices, availability, and website content at any time.</li>

            <li>Customers are responsible for providing accurate billing and shipping information.</li>

            <li>Any misuse of the website may result in restricted access or order cancellation.</li>

            <li>These Terms & Conditions are governed by the laws of Pakistan.</li>

          </ul>

          <p className="mt-8 text-gray-600 leading-8">
            If you have any questions regarding these Terms & Conditions,
            please contact us through our Contact Us page.
          </p>

        </div>

      </section>

    </MainLayout>
  );
}

export default Terms;