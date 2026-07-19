import { Link } from "react-router-dom";

import bag1 from "../../assets/images/products/bag-1.png";
import bag4 from "../../assets/images/products/bag-4.png";
import bag5 from "../../assets/images/bag-5.png";
import bag6 from "../../assets/images/bag-6.png";

const categories = [
  {
    name: "Shoulder Bag",
    image: bag1,
  },
  {
    name: "Crossbody",
    image: bag4,
  },
  {
    name: "Mini Bag",
    image: bag5,
  },
  {
    name: "Clutch",
    image: bag6,
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Shop by Category
        </p>

        <h2 className="text-4xl font-semibold mt-3">
          Find Your Perfect Bag
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/collection?category=${encodeURIComponent(category.name)}`}
            className="group relative overflow-hidden rounded-3xl"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-6 text-white">
              <h3 className="text-xl font-semibold">
                {category.name}
              </h3>

              <span className="text-2xl group-hover:translate-x-2 transition">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;