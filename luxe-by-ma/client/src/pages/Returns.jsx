import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-13.png";
import {
  FaUndoAlt,
  FaExchangeAlt,
  FaClipboardCheck,
  FaBoxOpen,
} from "react-icons/fa";

function Returns() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[420px] overflow-hidden">

        <img
          src={heroImage}
          alt="Returns"
className="absolute inset-0 w-full h-full object-cover object-center object-center"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Customer Care
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Returns & Exchanges
            </h1>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaUndoAlt className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Return Policy
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Returns are accepted within 7 days of receiving your order. Items
              must be unused, undamaged, and in their original packaging.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaExchangeAlt className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Exchange Policy
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Products may be exchanged if you receive the wrong item or a
              damaged product. Requests should be made within 7 days.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaClipboardCheck className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Return Conditions
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Returned items must include all original tags, accessories,
              receipts, and packaging to qualify for a return or exchange.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaBoxOpen className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Refund Process
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Once your returned item is inspected and approved, refunds or
              exchanges will be processed within 5–7 business days.
            </p>

          </div>

        </div>

      </section>

      {/* Additional Information */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white border rounded-3xl p-10">

          <h2 className="text-3xl font-semibold">
            Important Notes
          </h2>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 list-disc pl-6">

            <li>Return or exchange requests must be submitted within 7 days of delivery.</li>

            <li>Products showing signs of use cannot be returned.</li>

            <li>Shipping charges are non-refundable unless the error is on our side.</li>

            <li>Customized or sale items may not be eligible for returns.</li>

            <li>For assistance, please contact our customer support team before returning any item.</li>

          </ul>

        </div>

      </section>

    </MainLayout>
  );
}

export default Returns;