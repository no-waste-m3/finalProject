import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart()
  }, [])

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

    const { categoria, nomeDoProduto, pesoAprox, preco, userId, descricao, src, precoDeCusto, precoDeRevenda, precoOriginal} = product
    const newData = { nomeDoProduto, categoria, descricao, src, precoDeCusto, precoDeRevenda, precoOriginal, pesoAprox, preco, storeId: userId }
    

    api
      .post(`/users/${user.id}/cart`, newData, config)
      .then((response) => {
        
        setCart([...cart, response.data]);
      })
      .catch((error) => console.log(error));
  };

  const deleteCart = (id_product) => {
    api
      .delete(`/cart/${id_product}`, config)
      .then((response) => {
        console.log(response);
        const newCart = cart.filter((item) => item.id !== id_product);
        setCart([...newCart]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider value={{ cart, getCart, postCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
