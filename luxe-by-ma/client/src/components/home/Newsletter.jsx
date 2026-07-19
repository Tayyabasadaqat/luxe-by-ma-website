import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("🎉 Thanks for subscribing!");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-gray-100 rounded-3xl p-10 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Newsletter
        </p>

        <h2 className="text-4xl font-semibold mt-3">
          Join the Luxe By MA Community
        </h2>

        <p className="text-gray-600 mt-4">
          Be the first to discover new arrivals,
          exclusive collections and special offers.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 max-w-md px-6 py-4 rounded-full border outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-6 text-sm font-medium">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}

export default Newsletter;