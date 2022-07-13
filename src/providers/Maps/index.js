import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";



export const MapsContext = createContext();

export const MapsProvider = ({ children }) => {

  const { user } = useContext(FormContext);

  //const [ distance, setDistance ] = useState('')

  /*const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    ...getProgress
  };*/

  const key_maps = 'AIzaSyAfzxE5b6gr_97SqczcumpOKKXkaN3YpF0'

  const getDistance = async (adressDestination) => {

    const cityOrigin = user.info.endereco.cidade
    const stateOrigin = user.info.endereco.estado
    const roadOrigin = user.info.endereco.rua
    const districtOrigin = user.info.endereco.bairro
    const districtDestination = adressDestination.bairro
    const cityDestination = adressDestination.cidade
    const stateDestination = adressDestination.estado
    const roadDestination = adressDestination.rua


    const url = `https://shrouded-mountain-15003.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${roadDestination},${districtDestination},${cityDestination},${stateDestination}&origins=${roadOrigin},${districtOrigin},${cityOrigin},${stateOrigin}&units=imperial&key=${key_maps}`
    const distance = await api
    .get(url)
      .then((response) => response.data.rows[0].elements[0].duration.text)
      .catch((error) => console.log(error));
      
    return distance
  };

  

  return (
    <MapsContext.Provider
      value={{
          getDistance
      }}
    >
      {children}
    </MapsContext.Provider>
  );
};