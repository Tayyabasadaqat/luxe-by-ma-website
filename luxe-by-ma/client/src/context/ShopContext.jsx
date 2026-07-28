import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  // CART

  const addToCart = (product) => {

    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setCart([...cart, product]);
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
        wishlist.filter(
          (item) => item.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product
      ]);

    }

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
        isInWishlist
      }}
    >
      {children}
    </ShopContext.Provider>
  );

}


export function useShop() {

  return useContext(ShopContext);

}