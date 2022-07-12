import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";
import { notify } from "../../components/Toasts";
import { ThemeToastContext } from "../ThemeToast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { changeThemeToast } = useContext(ThemeToastContext);

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
        setCart([...cart, response.data]);
      })
      .then((response) => {
        changeThemeToast("success");
        notify("Produto adicionado ao carrinho", 3000);
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
      .then((response) => {
        changeThemeToast("error");
        notify("Produto retirado do carrinho", 3000, "error");
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider value={{ cart, getCart, postCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
