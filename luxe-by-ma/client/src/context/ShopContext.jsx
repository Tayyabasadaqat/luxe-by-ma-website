import { products } from "../data/products";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const ShopContext = createContext();

export function ShopProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const loadCart = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    setCart([]);
    return;
  }

  axios
    .get(`http://localhost:5000/api/cart/${user.id}`)
    .then((res) => {

      const cartItems = res.data.map((item) => ({
        ...JSON.parse(item.product_data),
        quantity: item.quantity,
      }));

      setCart(cartItems);

    })
    .catch((err) => console.log(err));

};
const loadWishlist = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    setWishlist([]);
    return;
  }

  axios
    .get(`http://localhost:5000/api/wishlist/${user.id}`)
    .then((res) => {

      const wishlistItems = res.data.map((item) => ({
        ...JSON.parse(item.product_data),
      }));
       console.log("Converted wishlist:", wishlistItems);

      setWishlist(wishlistItems);

    })
    .catch((err) => console.log(err));

};

useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  if(user){
    loadCart();
    loadWishlist();
  }

}, []);

  // CART

 const addToCart = async (product) => {

  const exists = cart.find(
    (item) => item.id === product.id
  );

  if (exists) return;

  setCart([...cart, product]);

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;

  try {

    await axios.post(
      "http://localhost:5000/api/cart",
      {
        user_id: user.id,
        product_data: JSON.stringify(product),
        quantity: 1,
      }
    );

  }

  catch (error) {

    console.log(error);

  }

};


  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  const clearCart = () => {

    setCart([]);

  };


  // WISHLIST
  const toggleWishlist = (product) => {

  const exists = wishlist.find(
    (item) => item.id === product.id
  );

  if (exists) {

    setWishlist(
      wishlist.filter((item) => item.id !== product.id)
    );

    return;
  }

  setWishlist([
    ...wishlist,
    product
  ]);

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;

  axios.post(
    "http://localhost:5000/api/wishlist",
    {
      user_id: user.id,
      product_data: product
    }
  )
  .then(() => console.log("Wishlist saved"))
  .catch((err) => console.log(err));

};
  
  const isInWishlist = (id) => {

    return wishlist.some(
      (item) => item.id === id
    );

  };


  return (
    <ShopContext.Provider
     value={{
  cart,
  wishlist,
  addToCart,
  removeFromCart,
  clearCart,
  toggleWishlist,
  isInWishlist,
  loadCart,
  loadWishlist
     }}
    >
      {children}
    </ShopContext.Provider>
  );

}


export function useShop() {

  return useContext(ShopContext);

}