import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-16.png";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  alert("Thank you! Your message has been received. We'll get back to you soon.");

  setForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
};
  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[450px] overflow-hidden">

        <img
          src={heroImage}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[0.3em] text-sm">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              We'd Love To Hear
              <br />
              From You
            </h1>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Get In Touch
            </p>

            <h2 className="text-4xl font-semibold mt-4">
              Let's Start A Conversation
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Whether you have a question about our products,
              your order, or simply want to know more about Luxe
              by M.A., we're always happy to help.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-2xl text-[#B08D57]" />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +92 300 1234567
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-2xl text-[#B08D57]" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    info@luxebyma.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-2xl text-[#B08D57]" />

                <div>

                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Islamabad, Pakistan
                  </p>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-12">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#B08D57] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#B08D57] transition"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">

<form onSubmit={handleSubmit} className="space-y-6">
              <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
/>

             <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
/>

             <input
  type="text"
  name="subject"
  value={form.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
/>

              <textarea
  rows="6"
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Your Message"
  className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black resize-none"
/>

             
              <button
  type="submit"
  className="w-full bg-black text-white py-4 rounded-full hover:bg-[#B08D57] transition"
>
  Send Message
</button>

            </form>

          </div>

        </div>

      </section>

      {/* Map */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
            className="w-full h-[450px] rounded-3xl border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </MainLayout>
  );
}

export default Contact;