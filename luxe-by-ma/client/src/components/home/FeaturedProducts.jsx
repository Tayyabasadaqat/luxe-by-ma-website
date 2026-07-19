import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          New Arrivals
        </p>

        <h2 className="text-4xl font-semibold mt-3">
          Discover Our Collection
        </h2>

      </div>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products
  .filter((product) => product.featured)
  .map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;