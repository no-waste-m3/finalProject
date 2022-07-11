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
import { ToogleTheme } from "../ToogleTheme";

const Header = ({ viewerWidth, needSearchBar = false }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [asidePages, setAsidePages] = useState(false);
  return (
    <HeaderContainer>
      <ToogleTheme style={{position: 'fixed', top: '5px', left: '5px' }}/>
      <HeaderCentralized>
        <HeaderLeftDiv>
          <Logo alt="logo" src={LogoNOWASTE} />
          <div>
            {" "}
            {needSearchBar && <SearchBar
              isSearching={isSearching}
              setIsSearching={setIsSearching}
              viewerWidth={viewerWidth}
            />}
            <AiOutlineMenu
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
