import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-start justify-center pt-24"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-semibold">
            Search Products
          </h2>

          <button onClick={onClose}>
            <FiX size={28} />
          </button>

        </div>

        <div className="relative">

          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

          <input
            autoFocus
            type="text"
            placeholder="Search handbags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border rounded-full pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-black"
          />

        </div>

        <div className="mt-8 max-h-[450px] overflow-y-auto">

          {query !== "" && filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No products found.
            </p>
          )}

          <div className="space-y-4">

            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
              >
                <div className="flex items-center gap-5 p-3 rounded-2xl hover:bg-gray-100 transition">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {product.name}
                    </h3>

                    <p className="text-gray-500">
                      PKR {product.price.toLocaleString()}
                    </p>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default SearchModal;