import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useShop } from "../../context/ShopContext";

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useShop();
  return (
    <div className="group cursor-pointer">

      <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-sm">

        <img
          src={product.image}
          alt={product.name}
className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"        />
<div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-5 pb-5">

<Link to={`/product/${product.id}`}>
  <button className="w-full bg-black text-white py-3 rounded-full hover:bg-[#B08D57] transition">
    View Product
  </button>
</Link>

</div>
<button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  }}
  className="absolute top-4 right-4 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur hover:scale-110 transition"
>
  {isInWishlist(product.id) ? (
    <FaHeart className="text-red-500" />
  ) : (
    <FiHeart />
  )}
</button>

      </div>

      <div className="mt-4">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-1 text-lg font-medium">
          {product.name}
        </h3>

        <p className="mt-2 font-semibold">
          PKR {product.price.toLocaleString()}
        </p>

      </div>

    </div>
  );
}

export default ProductCard;