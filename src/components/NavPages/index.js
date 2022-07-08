import { PageContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modals";

import { AiFillHome } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { GoDashboard } from "react-icons/go";
import { FaCarrot } from "react-icons/fa";

const NavPages = ({ setAsidePages }) => {
  const home = { name: "Home", icon: <AiFillHome size="20px" /> };
  const balance = { name: "Balanço", icon: <FaBalanceScale size="20px" /> };
  const dash = { name: "Dashboard", icon: <GoDashboard size="20px" /> };
  const stats = { name: "Sobre nós", icon: <FaCarrot size="20px" /> };
  const logout = { name: "Logout", icon: <BiExit size="20px" /> };

  const pageHome = [dash, balance, stats, logout];
  const pageDash = [balance, stats, logout, home];
  const pageStats = [dash, stats, logout, home];
  const pageAbout = [dash, balance, logout, home];

  const whichLocation = () => {
    const href = window.location.href;
    if (href === "http://localhost:3000/home") {
      return pageHome;
    } else if (href === "http://localhost:3000/dashboard") {
      return pageDash;
    } else if (href === "http://localhost:3000/stats") {
      return pageStats;
    } else if (href === "http://localhost:3000/about") {
      return pageAbout;
    }
  };

  const pages = whichLocation();

  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page === "Dashboard") {
      //navigate("/dashboard")
      //setAsidePages(false)
    } else if (page === "Balanço") {
      //navigate("/balance")
      //setAsidePages(false)
    } else if (page === "Sobre nós") {
      //navigate("/aboutus")
      //setAsidePages(false)
    } else if (page === "Logout") {
      //abre modal de realmente deseja sair
    } else if (page === "Home") {
      //navigate("/home")
      //setAsidePages(false)
    }
  };

  return (
    <Modal
      typeModal="primary"
      top="8.7%"
      padding="0.8rem"
      backgroundColor="var(--secondary-color)"
      borderRadius="0 0 15px 15px"
      borderTop="1px solid black"
    >
      {pages.map((page, index) => {
        return index === pages.length - 1 ? (
          <PageContainer borderBottom="0" key={index}>
            {page.icon}
            {page.name}
          </PageContainer>
        ) : (
          <PageContainer
            onClick={() => handleRedirect(page)}
            borderBottom="0.5px solid black"
            key={index}
          >
            {page.icon}
            {page.name}
          </PageContainer>
        );
      })}
    </Modal>
  );
};
export default NavPages;
