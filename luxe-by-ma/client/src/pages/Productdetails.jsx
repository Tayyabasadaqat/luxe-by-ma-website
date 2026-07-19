import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useShop } from "../context/ShopContext";
import { useState, useEffect } from "react";

function Productdetails() {
  const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);
const [quantity, setQuantity] = useState(1);
const { addToCart, cart } = useShop();

const alreadyInCart = cart.some(
  (item) => item.id === product.id
);
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Product Image */}
          <div>

            <img
src={product.image}
              alt="Product"
              className="w-full rounded-3xl"
            />

          </div>

          {/* Product Info */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
{product.category}          
  </p>

            <h1 className="text-4xl font-semibold mt-3">
{product.name}
            </h1>

            <p className="text-3xl font-bold mt-6">
PKR {product.price.toLocaleString()}
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              Crafted with premium materials, this handbag is designed
              for everyday elegance while offering spacious storage
              and timeless style.
            </p>
          <div className="flex items-center gap-4 mt-8">

  <span className="font-medium">
    Quantity
  </span>

  <div className="flex items-center border rounded-full">

    <button
      onClick={() =>
        quantity > 1 && setQuantity(quantity - 1)
      }
      className="px-4 py-2"
    >
      -
    </button>

    <span className="px-6">
      {quantity}
    </span>

    <button
      onClick={() =>
        setQuantity(quantity + 1)
      }
      className="px-4 py-2"
    >
      +
    </button>

  </div>

</div>
      <button
  onClick={() => addToCart(product)}
  disabled={alreadyInCart}
  className={`mt-10 w-full py-4 rounded-full transition ${
    alreadyInCart
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-black text-white hover:bg-[#B08D57]"
  }`}
>
  {alreadyInCart ? "Already in Cart" : "Add to Cart"}
</button>

          </div>

        </div>

      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-12">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
      You May Also Like
    </p>

    <h2 className="text-4xl font-semibold mt-3">
      More Bags You'll Love
    </h2>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {products
      .filter((item) => item.id !== product.id)
      .slice(0, 4)
      .map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}

  </div>

</section>
    </MainLayout>
  );
}

export default Productdetails;