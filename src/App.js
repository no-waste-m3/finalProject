<<<<<<< HEAD
import GlobalStyle from "./styles/GlobalStyle";
import { AppRoutes } from "./pages/routes";
import { useContext } from "react";
import { ThemeContext } from "./providers/Theme";
import { IsLoadingContext } from "./providers/IsLoading";
import Loading from "./components/Loading";
import { ToastNotify } from "./components/Toasts";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <AppRoutes />
      <ToastNotify />
      {isLoading && <Loading />}
    </>
  );
}

export default App;
=======
>>>>>>> 81f9980 (Revert "Merge pull request #117 from no-waste-m3/hot-fix")
