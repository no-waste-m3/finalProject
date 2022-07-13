import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";


export const StoresContext = createContext();

export const StoresProvider = ({ children }) => {

  const { userToken } = useContext(FormContext);

  const [ stores, setStores ] = useState([])

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  useEffect(() => {

  }, [])

  const getStores = () => {
    api
    .get(`/users?account=seller`, config)
      .then((response) => {
        setStores(response.data)
      })
      .catch((error) => console.log(error));

  };

  

  return (
    <StoresContext.Provider
      value={{
          stores, 
          getStores,
          setStores
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};