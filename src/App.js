import GlobalStyle from "./styles/GlobalStyle";
import { ToastNotify } from "./components/Toasts";
import { AppRoutes } from "./pages/routes";
import { FinancialStatement } from "./pages/Financial Statement";



function App() {
  return (
    <>
      <AppRoutes/>
      <GlobalStyle />
      <FinancialStatement/>
      <ToastNotify/>

    </>
  );
}

export default App;
