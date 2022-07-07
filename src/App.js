import Wade from "./components/Wade";
import GlobalStyle from "./styles/GlobalStyle";
//import { ToastNotify } from "./components/Toasts";
import { toast } from "react-toastify";
//import { Modal } from "./components/Modals";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import NavPages from "./components/NavPages";
//import FormRegister from "./components/FormRegister";
//import SearchBar from "./components/SearchBar";
import { Button } from "./components/Button";
import Cart from "./components/Cart";
import { AppRoutes } from "./pages/routes";
import Filters from "./components/Filters";
import { Link } from "react-router-dom";

function App() {
  // function 'notify' pode ser passada por props para os componentes que necessitem dela. Deve ser informada uma mensagem no parametro e o tempo em milissigundos para a animação permanecer na tela.

  const notify = (message, time) => {
    toast(message, {
      icon: <Wade width="5rem" height="6rem" />,
      autoClose: time,
    });
  };

  return (
    <>
      <AppRoutes />
      <GlobalStyle />

      {/* <Cart /> */}

      {/* <ToastNotify/> */}
      {/* Button para testes da notificação */}

      {/* <Button
        typebutton="primary"
        onClick={() => notify("Olá! Que bom te ver novamente.", 3000)}
      >
        Aqui
      </Button> */}

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
      {/* <Filters/> */}

      {/* <Modal width={10} height={10} padding={.1} borderRadius={.5} top={1} left={30} backColor='--white-0'/> */}
    </>
  );
}

export default App;
