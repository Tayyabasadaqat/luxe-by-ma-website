import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-26.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders are processed within 1–2 business days. Delivery usually takes 2–5 business days depending on your location.",
    },
    {
      question: "Do you deliver all over Pakistan?",
      answer:
        "Yes! We deliver nationwide through our trusted courier partners.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Currently, we offer Cash on Delivery (COD). Online payment options will be available soon.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "Yes. Returns and exchanges are accepted within 7 days, provided the product is unused and in its original condition.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email or SMS.",
    },
    {
      question: "Are your handbags made from premium materials?",
      answer:
        "Yes. Every Luxe by M.A. handbag is crafted using carefully selected premium-quality materials for durability and elegance.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Visit our Contact Us page or email us at info@luxebyma.com. We're always happy to help.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={heroImage}
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <p className="uppercase tracking-[0.3em] text-sm">
              Customer Care
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-[#B08D57] text-sm">
            Need Help?
          </p>

          <h2 className="text-4xl font-semibold mt-4">
            We're Here To Answer Your Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-gray-50 transition"
              >

                <span className="font-medium text-lg">
                  {faq.question}
                </span>

                {active === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {active === index && (
                <div className="px-8 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </section>
    </MainLayout>
  );
}

export default FAQ;