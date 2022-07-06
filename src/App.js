import Wade from "./components/Wade";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastNotify } from "./components/Toasts";
import { toast } from "react-toastify";
import { Modal } from './components/Modals';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavPages from "./components/NavPages";


function App() {

  // function 'notify' pode ser passada por props para os componentes que necessitem dela. Deve ser informada uma mensagem no parametro e o tempo em milissigundos para a animação permanecer na tela.

  const notify = (message, time) => {
    toast(message, {
      icon: <Wade width="5rem" height="6rem"/>,
      autoClose: time
    });
  }

  return (
    <>
      <GlobalStyle />

      <ToastNotify/>
      {/* Button para testes da notificação */}
      <button onClick={()=> notify("Olá! Que bom te ver novamente.", 3000)}>Aqui</button>
      {/* <NavPages /> - BALANÇO NÃO FICA COM BORDER BOTTOM}
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <Wade width='6rem' height='9.5rem'/> */}

      {/* Exemplo de utilização do modal */}
      <Modal width={10} height={10} padding={.1} borderRadius={.5} top={1} left={10} backColor='--grey-1'/>

    </>
  );
}

export default App;
