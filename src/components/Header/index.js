import {
  HeaderContainer,
  HeaderCentralized,
  HeaderLeftDiv,
  Logo,
} from "./styled";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import NavPages from "../NavPages";
import LogoNOWASTE from "../../assets/LogoNOWASTE.png";
import LogoNOWASTEwhite1 from "../../assets/LogoNOWASTEwhite1.png";
import SearchBar from "../SearchBar";
import { ToogleTheme } from "../ToogleTheme";
import { ThemeContext } from "../../providers/Theme";

const Header = ({ viewerWidth, needSearchBar = false }) => {
  const { theme } = useContext(ThemeContext);
  const [isSearching, setIsSearching] = useState(false);
  const [asidePages, setAsidePages] = useState(false);
  return (
    <HeaderContainer
      backColor={
        theme === "light" ? "var(--secondary-color)" : "var(--primary-color)"
      }
    >
      <ToogleTheme style={{ position: "fixed", top: "5px", left: "5px" }} />
      <HeaderCentralized>
        <HeaderLeftDiv>
          <Logo
            alt="logo"
            src={theme === "light" ? LogoNOWASTE : LogoNOWASTEwhite1}
          />
          <div>
            {" "}
            {needSearchBar && (
              <SearchBar
                isSearching={isSearching}
                setIsSearching={setIsSearching}
                viewerWidth={viewerWidth}
              />
            )}
            <AiOutlineMenu
              color={theme === "dark" && "white"}
              onClick={() => setAsidePages(asidePages ? false : true)}
              fontSize="25px"
              style={{ cursor: "pointer" }}
            />
          </div>
        </HeaderLeftDiv>
        {asidePages && <NavPages setAsidePages={setAsidePages} />}
      </HeaderCentralized>
    </HeaderContainer>
  );
};

export default Header;
