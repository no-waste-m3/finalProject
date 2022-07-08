import { NavContainer, PageContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const NavPages = ({ setAsidePages }) => {
  const home = ["Dashboard", "Balanço", "Sobre nós", "Logout"];
  const dash = ["Balanço", "Sobre nós", "Logout", "Home"];
  const stats = ["Dashboard", "Sobre nós", "Logout", "Home"];
  const about = ["Dashboard", "Balanço", "Logout", "Home"];
  const more = ["Login"];

  const whichLocation = () => {
    const href = window.location.href;
    if (href === "http://localhost:3000/home") {
      return home;
    } else if (href === "http://localhost:3000/dashboard") {
      return dash;
    } else if (href === "http://localhost:3000/stats") {
      return stats;
    } else if (href === "http://localhost:3000/about") {
      return about;
    }else if (href === "http://localhost:3000/home/about") {
    return more;
  }
  };

  const pages = whichLocation();

  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page === "Dashboard") {
      navigate("/dashboard")
      setAsidePages(false)
    } else if (page === "Balanço") {
      navigate("/balance")
      setAsidePages(false)
    } else if (page === "Sobre nós") {
      navigate("/aboutus")
      setAsidePages(false)
    } else if (page === "Logout") {
      //abre modal de realmente deseja sair
    } else if (page === "Home") {
      navigate("/home")
      setAsidePages(false)
    }else if (page === "Login") {
      navigate("/")
      setAsidePages(false)
    }
  };

  return (
    <NavContainer>
      {pages.map((page, index) => {
        return index === pages.length - 1 ? (
          <PageContainer borderBottom="0" key={index}>
            {page}
          </PageContainer>
        ) : (
          <PageContainer
            onClick={() => handleRedirect(page)}
            borderBottom="0.5px solid black"
            key={index}
          >
            {page}
          </PageContainer>
        );
      })}
    </NavContainer>
  );
};
export default NavPages;
