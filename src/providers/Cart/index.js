import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";
import { notify } from "../../components/Toasts";
import { ThemeToastContext } from "../ThemeToast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { changeThemeToast } = useContext(ThemeToastContext);

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
      .then((response) => {
        changeThemeToast("success");
        notify("Produto adicionado ao carrinho", 2000);
      })
      .catch((error) => console.log(error));
  };

  const deleteCart = (id_product) => {
    api
      .delete(`/cart/${id_product}`, config)
      .then((response) => {
        const newCart = cart.filter((item) => item.id !== id_product);
        setCart([...newCart]);
      })
      .then((response) => {
        changeThemeToast("error");
        notify("Produto retirado do carrinho", 2000, "error");
      })
      .catch((error) => console.log(error));
  };

  const deleteCartFromCheckout = (id_product) => {

    api
      .delete(`/cart/${id_product}`, config)
      .then((response) => {
        setCart([]);
      })
      .catch((error) => console.log(error));

  }

  return (
    <CartContext.Provider value={{ cart, getCart, postCart, deleteCart, deleteCartFromCheckout }}>
      {children}
    </CartContext.Provider>
  );
};
