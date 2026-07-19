import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import bag1 from "../assets/images/products/bag-1.png";
import bag2 from "../assets/images/products/bag-2.png";
import bag3 from "../assets/images/products/bag-3.png";
import heroImage from "../assets/images/bag-12.png";

function About() {
  return (
    <MainLayout>

      {/* Hero Section */}
     <section className="relative h-[600px] overflow-hidden">

  <img
    src={heroImage}
    alt="About Luxe by M.A."
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Black Overlay */}
  <div className="absolute inset-0"></div>
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center">

    <div className="text-center text-white px-6">

      <p className="uppercase tracking-[0.3em] text-sm">
        About Luxe by M.A.
      </p>

      <h1 className="text-5xl md:text-6xl font-semibold mt-4">
        Timeless Elegance.
        <br />
        Everyday Luxury.
      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-200">
        At Luxe by M.A., we believe every handbag should be more than
        an accessory—it should reflect confidence, elegance, and
        timeless style. Our carefully curated collection is designed
        for women who appreciate luxury in every detail.
      </p>

    </div>

  </div>

</section>
      {/* Our Story */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Our Story
          </p>

          <h2 className="text-4xl font-semibold mt-4">
            Crafted For Modern Women
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Luxe by M.A. was founded with one vision—to bring elegant,
            high-quality handbags to women who appreciate sophisticated
            fashion. Every design is chosen to balance beauty,
            functionality, and lasting quality, making each piece a
            timeless addition to your wardrobe.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Whether you're heading to work, attending an event, or simply
            enjoying everyday moments, our handbags are designed to
            complement your lifestyle while adding effortless luxury.
          </p>

        </div>

      </section>

      {/* Featured Bags */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-100 rounded-3xl p-8 overflow-hidden group">

            <img
              src={bag1}
              alt="Luxury Bag"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

          <div className="bg-gray-100 rounded-3xl p-8 overflow-hidden group">

            <img
              src={bag2}
              alt="Luxury Bag"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

          <div className="bg-gray-100 rounded-3xl p-8 overflow-hidden group">

            <img
              src={bag3}
              alt="Luxury Bag"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-[#fafafa] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-semibold mt-4">
              Luxury That Speaks For Itself
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>

              <div className="text-5xl mb-5">✨</div>

              <h3 className="text-xl font-semibold">
                Premium Quality
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Carefully selected handbags crafted for durability and elegance.
              </p>

            </div>

            <div>

              <div className="text-5xl mb-5">👜</div>

              <h3 className="text-xl font-semibold">
                Curated Collection
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Trendy and timeless designs for every occasion.
              </p>

            </div>

            <div>

              <div className="text-5xl mb-5">🚚</div>

              <h3 className="text-xl font-semibold">
                Fast Delivery
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Safe and reliable delivery across Pakistan.
              </p>

            </div>

            <div>

              <div className="text-5xl mb-5">❤</div>

              <h3 className="text-xl font-semibold">
                Customer First
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Dedicated support to make every shopping experience exceptional.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Our Mission
        </p>

        <h2 className="text-4xl font-semibold mt-4">
          Inspiring Confidence Through Style
        </h2>

        <p className="mt-8 text-gray-600 leading-8">
          We strive to make luxury fashion accessible by offering
          handbags that combine elegance, quality, and affordability.
          Every collection is thoughtfully selected to help women
          express their unique personality with confidence.
        </p>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-300">
            Discover More
          </p>

          <h2 className="text-5xl font-semibold mt-4">
            Find Your Perfect Handbag
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Browse our latest collection and discover timeless pieces
            designed for every style.
          </p>

          <Link
            to="/collection"
            className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-full hover:bg-[#B08D57] hover:text-white transition duration-300"
          >
            Shop Collection
          </Link>

        </div>

      </section>

    </MainLayout>
  );
}

export default About;