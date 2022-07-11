import { createContext, useState } from "react";

export const IsLoadingContext = createContext();

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(70)

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading, percentage, setPercentage }}>
      {children}
    </IsLoadingContext.Provider>
  );
};