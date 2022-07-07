import { createContext, useState } from "react";
import { api } from "../../services/api";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userNoWasteToken")) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userNoWaste")) || false
  );

  const registerUser = (user) => {
    api
      .post("/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const loginUser = (user) => {
    api
      .post("/login", user)
      .then((response) => {
        setUserToken(response.acessToken);
        setUser(response.user);

        localStorage.setItem(
          "@userNoWasteToken",
          JSON.stringify(response.acessToken)
        );
        localStorage.setItem("@userNoWaste", JSON.stringify(response.user));
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormContext.Provider
      value={{
        userToken,
        user,
        registerUser,
        loginUser,
        setUserToken,
        setUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
