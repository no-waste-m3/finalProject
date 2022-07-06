import {
  HeaderContainer,
  HeaderCentralized,
  HeaderLeftDiv,
  Logo,
} from "./styled";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavPages from "../NavPages";
import LogoNOWASTE from "../../assets/LogoNOWASTE.png";
import SearchBar from "../SearchBar";

const Header = () => {
  const [viewerWidth, setViewerWidth] = useState(window.screen.availWidth);
  const [isSearching, setIsSearching] = useState(false);
  const [asidePages, setAsidePages] = useState(false);
  window.addEventListener("resize", () =>
    setViewerWidth(window.screen.availWidth)
  );

  return (
    <HeaderContainer>
      <HeaderCentralized>
        <HeaderLeftDiv>
          <Logo alt="logo" src={LogoNOWASTE} />
          <div>
            {" "}
            <SearchBar
              isSearching={isSearching}
              setIsSearching={setIsSearching}
              viewerWidth={viewerWidth}
            />
            <AiOutlineMenu
              onClick={() => setAsidePages(asidePages ? false : true)}
              fontSize="25px"
              style={{ cursor: "pointer" }}
            />
          </div>
        </HeaderLeftDiv>
      </HeaderCentralized>
    </HeaderContainer>
  );
};

export default Header;
