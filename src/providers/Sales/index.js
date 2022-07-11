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

        console.log(number)

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

        console.log(number)


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

  const getSales = () => {
    api
    .get(`users/${user.id}/sales`, config)
      .then((response) => setSales(response.data))
      .catch((error) => console.log(error));
  };

  const addSale = async (products) => {

    await products.forEach(async (product) => {
        
    await api
      .post(`users/${product.storeId}/sales`, product, config)
      .then((response) => response)
      .catch((error) => {

        changeThemeToast('error') 
        notify("Ops, ocorreu algum erro. Tente novamente mais tarde.", 3000, 'error')
        console.log(error)
        throw(error)

      });

    })

    changeThemeToast('success') 
    
    notify('Compra feita com sucesso! Você acabou de reduzir Em alguns minutos chegará o seu pedido', 1000, 'success')
          
    
  };

  

  return (
    <SalesContext.Provider
      value={{
          sales, 
          getSales,
          addSale
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
