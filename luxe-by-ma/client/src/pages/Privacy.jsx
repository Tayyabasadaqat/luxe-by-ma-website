import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-24.png";
import {
  FaUserShield,
  FaLock,
  FaCookieBite,
  FaDatabase,
} from "react-icons/fa";

function Privacy() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[420px] overflow-hidden">

        <img
          src={heroImage}
          alt="Privacy Policy"
className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Customer Care
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Privacy Policy
            </h1>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaDatabase className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Information We Collect
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              We collect information such as your name, email address,
              phone number, shipping address, and order details to
              process purchases and improve your shopping experience.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaLock className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Data Protection
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Your personal information is securely stored and is never
              sold or shared with third parties except where necessary
              to process your order.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaCookieBite className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Cookies
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Cookies help us remember your preferences, improve website
              performance, and provide a more personalized browsing
              experience.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">

            <FaUserShield className="text-4xl text-[#B08D57]" />

            <h2 className="text-2xl font-semibold mt-6">
              Your Rights
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              You may request access to your personal information,
              update inaccurate details, or ask us to delete your data,
              subject to applicable legal requirements.
            </p>

          </div>

        </div>

      </section>

      {/* Policy Details */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white border rounded-3xl p-10">

          <h2 className="text-3xl font-semibold">
            Our Commitment to Your Privacy
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            At Luxe by M.A., we value your trust. We are committed to
            protecting your personal information and using it only to
            provide a secure, convenient, and enjoyable shopping
            experience. By using our website, you agree to the
            collection and use of your information in accordance with
            this Privacy Policy.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            If you have any questions regarding this policy, please
            contact our customer support team through the Contact Us
            page.
          </p>

        </div>

      </section>

    </MainLayout>
  );
}

export default Privacy;