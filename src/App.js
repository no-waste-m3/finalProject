import GlobalStyle from "./styles/GlobalStyle";
import { notify, ToastNotify } from "./components/Toasts";
import { AppRoutes } from "./pages/routes";
import { FinancialStatement } from "./pages/FinancialStatement";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import Filters from "./components/Filters";
import { Link } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Button } from "./components/Button";
import { useContext } from "react";
import { ThemeToastContext } from "./providers/ThemeToast";
import SadWadeAnimated from "./components/SadWadeAnimated";
import { ThemeContext } from "./providers/Theme";
import { motion  } from "framer-motion";
import { ToogleTheme } from './components/ToogleTheme';
import { IsLoadingContext } from "./providers/IsLoading";
import Loading from "./components/Loading";

function App() {

  const { changeThemeToast } = useContext(ThemeToastContext)
  const { theme } = useContext(ThemeContext)
  const { isLoading } = useContext(IsLoadingContext)

  return (
    <>
      <GlobalStyle theme={theme} />
      <AppRoutes />
      <ToastNotify/>
      {isLoading && <Loading/>}
    
      {/* <FinancialStatement/> */}

      {/* <Cart /> */}



      {/* Button para testes da notificação */}
      {/*<Button typebutton='primary' onClick={()=> {
        changeThemeToast('error') 
      notify("Olá! Que bom te ver novamente.", 3000, 'error')}}>Aqui</Button>*/}

      {/* <NavPages /> - BALANÇO NÃO FICA COM BORDER BOTTOM}
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <Button typebutton="primary" width="265px">
        Finalizar compra
      </Button> */}
      {/* <Wade width='6rem' height='9.5rem'/> */}
      {/* <SearchBar /> */}

      {/* Exemplo de utilização do modal */}

      {/* <Modal width={10} height={10} padding={.1} borderRadius={.5} top={1} left={10} backColor='--grey-1'/> */}
      {/*<Filters/> */}

      {/* <Modal width={10} height={10} padding={.1} borderRadius={.5} top={1} left={30} backColor='--white-0'/> */}

    </>
  );
}

export default App;
