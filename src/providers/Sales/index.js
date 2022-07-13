import { createContext, useContext, useEffect, useState } from "react";
import { notify } from "../../components/Toasts";
import { api } from "../../services/api";
import { FormContext } from "../Form";
import { IsLoadingContext } from "../IsLoading";
import { ThemeToastContext } from "../ThemeToast";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {

  const { changeThemeToast } = useContext(ThemeToastContext)
  const { user, userToken, exitUser } = useContext(FormContext);

  const [ sales, setSales ] = useState([])

  useEffect(() => {

    getSales()

  }, [])

  const { setIsLoading, setPercentage } = useContext(IsLoadingContext)

  const getProgress = {
    onDownloadProgress: (progressEvent) => {
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
        
     },
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
  };

  const getSales = () => {
    api
    .get(`users/${user.id}/sales`, config)
      .then((response) => {
        console.log(sales)
        setSales(response.data)
      })
      .catch((error) => console.log(error));
  };

  const addSales = async (product) => {

    const { categoria,
      descricao,
      nomeDoProduto,
      pesoAprox,
      precoDeRevenda,
      precoDeCusto,
      precoOriginal,
      src,
      storeId,
      userId } = product
    const newProduct = { categoria,
      descricao,
      nomeDoProduto,
      pesoAprox,
      precoDeRevenda,
      precoDeCusto,
      precoOriginal,
      src,
      storeId,
      userId }

    newProduct.date = new Date()
        
    return await api
      .post(`users/${product.storeId}/sales`, newProduct, config)
      .then((response) => {
        setSales([...sales, response.data])
      })
      .catch((error) => {
        changeThemeToast('error') 
        notify("Ops, ocorreu algum erro. Tente novamente mais tarde.", 3000, 'error')
        throw(error)

      }); 
          
    
  };

  

  return (
    <SalesContext.Provider
      value={{
          sales, 
          addSales,
          getSales
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
