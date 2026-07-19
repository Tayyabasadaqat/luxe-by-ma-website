import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Wishlist() {
  const { wishlist } = useShop();

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Wishlist
          </p>

          <h1 className="text-5xl font-semibold mt-3">
            My Wishlist
          </h1>

          <p className="text-gray-500 mt-4">
            Your favorite handbags in one place.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-medium">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Save your favorite handbags and they'll appear here.
            </p>

            <Link
              to="/collection"
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-[#B08D57] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}

export default Wishlist;