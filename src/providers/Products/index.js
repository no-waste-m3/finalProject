import { createContext, useEffect, useState, useContext } from "react";
import { notify } from "../../components/Toasts";
import { api } from "../../services/api";
import { FormContext } from "../Form";
import { IsLoadingContext } from "../IsLoading";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsUser, setProductsUser] = useState([]);
  const { user, userToken, exitUser } = useContext(FormContext);

  const { setIsLoading, setPercentage } = useContext(IsLoadingContext)

  const getProgress = {
    onUploadProgress: (progressEvent) => {
      setIsLoading(true)
        let number = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )

        if(number<100) {
          setPercentage(number)
        } else {
          setIsLoading(false)
          setPercentage(0)
        }
        
     }
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    ...getProgress
  };

  // const analizeError = (error) => {
  //   if(error.response.data.includes('expired')) {
  //     exitUser()
  //   } else {
  //     console.log(error)
  //   }
  // }

  const getProducts = () => {
    api
      .get("/foods", config)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  const postProduct = (product) => {
    api
      .post(`/users/${user.id}/foods`, product, config)
      .then((response) => console.log(response))
      .then((response) => {
        getProductsUser();
        notify("Produto Adicionado", 2000, "success");
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id_product) => {
    api
      .delete(`/foods/${id_product}`, config)
      .then((response) => console.log(response))
      .then((response) => {
        getProductsUser();
        notify("Produto Excluido", 2000, "default");
      })
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
      .then((response) => setProductsUser(response.data))
      // .catch((error) => analizeError(error));
      .catch((error) => console.log(error, user));
  };

  //Qual o objetivo desse useEffect abaixo?

  useEffect(() => {
    if (userToken !== false && user.account === "seller") {
      getProductsUser();
    } else if (userToken !== false) {
      getProducts();
    }
  }, [userToken, user]);

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
