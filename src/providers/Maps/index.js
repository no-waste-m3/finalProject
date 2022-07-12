import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormContext } from "../Form";



export const MapsContext = createContext();

export const MapsProvider = ({ children }) => {

  const { user } = useContext(FormContext);

  console.log(user)

  //const [ distance, setDistance ] = useState('')

  /*const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    ...getProgress
  };*/

  const key_maps = 'AIzaSyAfzxE5b6gr_97SqczcumpOKKXkaN3YpF0'

  const getDistance = async () => {

    const cepOrigin = ''
    const cepDestination = ''

    /*https://maps.googleapis.com/maps/api/distancematrix/json?destinations=62022465origins=62030175&units=imperial&key=${key_maps}*/
    const distance = await api
    .get(`users/${user.id}/Maps`)
      .then((response) => response)
      .catch((error) => console.log(error));

      console.log(distance)
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