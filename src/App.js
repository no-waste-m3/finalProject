import GlobalStyle from "./styles/GlobalStyle";
import { ToastNotify } from "./components/Toasts";
import { AppRoutes } from "./pages/routes";
import { FinancialStatement } from "./pages/FinancialStatement";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import Filters from "./components/Filters";
import { Link } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      {/* <FinancialStatement/> */}

      {/* <Cart /> */}
      {/* <ToastNotify/> */}
      {/* Button para testes da notificação */}

      {/*<Button typebutton='primary' onClick={()=> notify("Olá! Que bom te ver novamente.", 3000)}>Aqui</Button>

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
