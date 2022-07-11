import { createContext, useContext, useState } from "react";
import { notify } from "../../components/Toasts";
import { api } from "../../services/api";
import { ThemeToastContext } from "../ThemeToast";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userNoWasteToken")) || ""
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userNoWaste")) || ""
  );

  const { changeThemeToast } = useContext(ThemeToastContext)

  const registerUser = (user) => {
    api
      .post("/register", user)
      .then((response) => {
        const { email, password } = user
        loginUser({email, password})
      })
      .catch((error) => console.log(error));
  };

  const loginUser = (user) => {
    api
      .post("/login", user)
      .then((response) => {
        
        changeThemeToast('success') 
        notify("Que bom te ver novamente!", 2000, 'success')

        setTimeout(() => {
        setUserToken(response.data.accessToken);
        setUser(response.data.user);

        localStorage.setItem(
          "@userNoWasteToken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@userNoWaste",
          JSON.stringify(response.data.user)
        );
        }, 1000);
      })
      .catch((error) => {

        changeThemeToast('error') 
        notify("Ops, ocorreu algum erro. Verifique seu email e senha", 3000, 'error')

        setUserToken('');
        setUser('');
        localStorage.removeItem("@userNoWasteToken")
        localStorage.removeItem("@userNoWaste")

      });
  };

  const exitUser = () => {
    setUserToken('');
    setUser('');
    localStorage.removeItem("@userNoWasteToken")
    localStorage.removeItem("@userNoWaste")
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
        exitUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
