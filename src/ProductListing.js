import { createContext, useContext, useState } from "react";
const defaultContextvalue = { items: 4, logger: () => console.log("log") };

const CartContext = createContext(defaultContextvalue);

const CartProvider = ({ children }) => {
  const [item, setitem] = useState(0);
  function Addtocart() {
    setitem((item) => item + 1);
  }

  return (
    <CartContext.Provider value={{ item, Addtocart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
