import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { user, userToken } = useContext(FormContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const getCart = () => {
    api
      .get(`/users/${user.id}/cart`, config)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };

  const postCart = (product) => {
    api
      .post(`/users/${user.id}/cart`, product, config)
      .then((response) => {
        console.log(response);
        setCart([...cart, response.data])
      })
      .catch((error) => console.log(error));
  };

  const deleteCart = (id_product) => {
    api
      .delete(`/foods/${id_product}`, config)
      .then((response) => {
        console.log(response);
        const newCart = cart.filter((item) => item.id !== id_product)
        setCart([...newCart]) 
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider value={{ cart, getCart, postCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
