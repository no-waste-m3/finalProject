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

const Header = () => {
  const [asidePages, setAsidePages] = useState(false);

  return (
    <HeaderContainer>
      <HeaderCentralized>
        <HeaderLeftDiv>
          <Logo alt="logo" src={LogoNOWASTE} />
          <AiOutlineMenu
            onClick={() => setAsidePages(asidePages ? false : true)}
            fontSize="25px"
            style={{ cursor: "pointer" }}
          />
        </HeaderLeftDiv>
      </HeaderCentralized>
    </HeaderContainer>
  );
};

export default Header;
