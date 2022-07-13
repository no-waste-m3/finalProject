import { PageContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modals";

import { AiFillHome } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { GoDashboard } from "react-icons/go";
import { FaCarrot } from "react-icons/fa";
import { useContext, useState } from "react";
import { ModalConfirm } from "../Modals/ModalConfirm";
import { FormContext } from "../../providers/Form";
import { ThemeContext } from "../../providers/Theme";

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
  const pageCheckout = [ home, stats, logout]

  const [showConfirm, setShowConfirm] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { exitUser } = useContext(FormContext);

  const whichLocation = () => {
    const href = window.location.href;
    if (href === "http://localhost:3000/home") {
      return pageHome;
    } else if (href === "http://localhost:3000/home/dashboard") {
      return pageDash;
    } else if (href === "http://localhost:3000/home/dashboard/stats") {
      return pageStats;
    } else if (href === "http://localhost:3000/home/about") {
      return pageAbout;
    } else if (href === "http://localhost:3000/home/checkout") {
      return pageCheckout;
  };
}

  const pages = whichLocation();

  const onConfirmLogout = () => {
    exitUser();
  };

  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page.name === "Dashboard") {
      navigate("/home/dashboard");
      setAsidePages(false);
    } else if (page.name === "Balanço") {
      navigate("/home/dashboard/stats");
      setAsidePages(false);
    } else if (page.name === "Sobre nós") {
      navigate("/home/about");
      setAsidePages(false);
    } else if (page.name === "Logout") {
      setShowConfirm(true);
    } else if (page.name === "Home") {
      navigate("/home");
      setAsidePages(false);
    } else if (page.name === "Login") {
      navigate("/");
      setAsidePages(false);
    }
  };

  return (
    <Modal
      typeModal="NavPages"
      top="100%"
      padding="0.8rem"
      backgroundColor={
        theme === "dark" ? "var(--primary-color)" : "var(--secondary-color)"
      }
      borderRadius="0 0 15px 15px"
      borderTop={theme === "dark" ? "1px solid white" : "1px solid black"}
    >
      {pages.map((page, index) => {
        return (
          <PageContainer
            geralColor={theme === "dark" && "white"}
            onClick={() => handleRedirect(page)}
            borderBottom={
              index === pages.length - 1
                ? "0"
                : `0.5px solid ${theme === "dark" ? "white" : "black"}`
            }
            key={index}
          >
            {page.icon}
            {page.name}
          </PageContainer>
        );
      })}
      <ModalConfirm
        text="Deseja mesmo fazer logout?"
        onConfirmFunction={onConfirmLogout}
        setVisible={setShowConfirm}
        visible={showConfirm}
      />
    </Modal>
  );
};


export default NavPages;
