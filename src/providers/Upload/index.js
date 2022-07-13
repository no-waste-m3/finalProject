import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { IsLoadingContext } from "../IsLoading";
import axios from "axios";



export const UploadContext = createContext();

export const UploadProvider = ({ children }) => {

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
      
        let number = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )



        if(number<100) {
            setIsLoading(true)
            setPercentage(number)
        } else {
          setIsLoading(false)
          setPercentage(0)
        }
        
     }
  }

const api_key = "788947227168841";
const cloud_name = "drcattrj1";

const doUpload = async (data) => {

  data.append("api_key", api_key);
  data.append("upload_preset", "kbreyloh");

  const cloudinaryResponse = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
      ...getProgress,
    }
  );
  return cloudinaryResponse.data

};


  return (
    <UploadContext.Provider
      value={{
        doUpload
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
