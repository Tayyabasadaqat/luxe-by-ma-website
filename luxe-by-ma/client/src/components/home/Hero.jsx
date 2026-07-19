import heroImage from "../../assets/images/hero-bag.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="relative overflow-hidden rounded-3xl">

        <img
src={heroImage}
alt="Luxury handbag"
className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105"        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm mb-4">
              New Collection
            </p>

            <h1 className="text-5xl font-semibold mb-6">
              Timeless Luxury
            </h1>

            <Link
  to="/collection"
  className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition"
>
  Shop Now
</Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;