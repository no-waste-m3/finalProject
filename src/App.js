import Wade from "./components/Wade";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastNotify } from "./components/Toasts";
import { toast } from "react-toastify";

function App() {

  // function 'notify' pode ser passada por props para os componentes que necesistem dela. Deve ser informada uma mensagem no parametro e o tempo em milissigundos para a animação permanecer na tela.

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
    </>
  );
}

export default App;
