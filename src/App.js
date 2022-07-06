import Wade from './components/Wade';
import GlobalStyle from "./styles/GlobalStyle";
import { AppRoutes } from './pages/routes';


function App() {
  return (
    <>
    <AppRoutes/>
    <GlobalStyle/>
    <Wade width='6rem' height='9.5rem'/>
    </>
  );
}


export default App;
