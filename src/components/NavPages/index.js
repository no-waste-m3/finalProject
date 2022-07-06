import { NavContainer, PageContainer } from "./styled";
// import { useNavigate } from "react-router-dom"

const NavPages = () => {
  const pages = ["Dashboard", "Balanço", "Sobre nós", "Logout"];
  //se o path for Home, ou Dash etc, o array muda

  // const navigate = useNavigate();
  const handleRedirect = (page) => {
    if (page === "Dashboard") {
      //navigate("/dashboard")
    } else if (page === "Balanço") {
      //navigate("/balance")
    } else if (page === "Sobre nós") {
      //navigate("/aboutus")
    } else if (page === "Logout") {
      //abre modal de realmente deseja sair
    } else if (page === "Home") {
      //navigate("/home")
    }
  };

  return (
    <NavContainer>
      {pages.map((page, index) => {
        return page[index] === page[pages.length - 1] ? (
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
