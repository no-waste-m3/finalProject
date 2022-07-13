import { createContext, useContext, useState } from "react";
import { notify } from "../../components/Toasts";
import { api } from "../../services/api";
import { IsLoadingContext } from "../IsLoading";
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

  const { setIsLoading, setPercentage, percentage } = useContext(IsLoadingContext)

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

  const registerUser = (user) => {
    api
      .post("/register", user, getProgress)
      .then((response) => {
        const { email, password } = user
        loginUser({email, password}, true)
      })
      .catch((error) => console.log(error));
  };

  const loginUser = (user, isNewUser) => {
    api
      .post("/login", user)
      .then((response) => {
        
        changeThemeToast('success') 
        setIsLoading(true)

        let perc = 0

        const interval = setInterval(() => {

          perc += 10
          
          setPercentage(perc)
          console.log(percentage)
          console.log(perc)
          
        }, 100);

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
        const name = response.data.user.info.responsavel || response.data.user.info.name  
        notify(isNewUser ? `Olá, ${name}. Bem vindo(a)! ` : `Que bom te ver novamente, ${name}!`, 2000, 'success')
        }, 1000);

        setTimeout(() => {
          setIsLoading(false)
          clearInterval(interval)
          setPercentage(0)
          
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
