import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsUser, setProductsUser] = useState([]);
  const { user, userToken } = useContext(FormContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const getProducts = () => {
    api
      .get("/foods")
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  };

  const postProduct = (product) => {
    api
      .post(`/users/${user.id}/foods`, product, config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id_product) => {
    api
      .delete(`/foods/${id_product}`, config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const updateProduct = (id_product, product_update) => {
    api
      .patch(`/foods/${id_product}`, product_update, config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getProductsUser = () => {
    api
      .get(`users/${user.id}/foods`, config)
      .then((response) => setProductsUser(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsUser,
        getProducts,
        postProduct,
        deleteProduct,
        updateProduct,
        getProductsUser,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};