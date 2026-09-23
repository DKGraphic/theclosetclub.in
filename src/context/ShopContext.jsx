import { createContext, useContext, useState, useCallback } from 'react';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleWishlist = useCallback((productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const value = {
    wishlist,
    toggleWishlist,
    isSearchOpen,
    setSearchOpen,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
