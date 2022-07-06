import Wade from "./components/Wade";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavPages from "./components/NavPages";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <NavPages /> - BALANÇO NÃO FICA COM BORDER BOTTOM}
      {/* <Footer /> */}
      <Header />
      {/* <Wade width='6rem' height='9.5rem'/> */}
      {/* <SearchBar /> */}
    </>
  );
}

export default App;
