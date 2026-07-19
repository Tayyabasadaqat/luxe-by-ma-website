import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import { useSearchParams } from "react-router-dom";

function Collection() 
{
  const [search, setSearch] = useState("");
const [searchParams] = useSearchParams();

const initialCategory = searchParams.get("category") || "All";

const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Shop
          </p>

          <h1 className="text-5xl font-semibold mt-3">
            Our Collection
          </h1>

          <p className="text-gray-500 mt-4">
            Discover our luxury handbags.
          </p>
        </div>

        {/* Search */}
        <div className="mt-12 mb-8">
          <input
            type="text"
            placeholder="Search bags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "All",
            "Shoulder Bag",
            "Mini Bag",
            "Crossbody",
            "Clutch",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "border hover:bg-black hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

export default Collection;