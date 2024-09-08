
import React, { createContext, useState } from "react";


 const CartContextApi = createContext();

 const CartProvider = ({ children }) => {


  const [count, setcount] = useState(0);

  const increment = () => setcount(count + 1);

  return (
    <CartContextApi.Provider value={{ count, increment }}>
      {children}
      
    </CartContextApi.Provider>
  );
};




export { CartContextApi, CartProvider };
