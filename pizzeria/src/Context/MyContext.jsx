import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
}

export const MyContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    console.log("Añadir al carrito:", item);
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[item.name] = (updatedCartItems[item.name] || 0) + 1;
      return updatedCartItems;
    });
  }

  const removeFromCart = (itemName) => {
    console.log("Quitar del carrito:", itemName);
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemName] > 1) {
        updatedCartItems[itemName]--;
      } else {
        delete updatedCartItems[itemName];
      }
      return updatedCartItems;
    });
  }

  useEffect(() => {
    console.log("Estado del carrito actualizado:", cartItems);
  }, [cartItems]);

  return (
    <MyContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
};
