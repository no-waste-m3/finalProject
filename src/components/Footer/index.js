import {
  FooterContainer,
  FooterCentralized,
  FooterCenterDiv,
  Title,
} from "./styled";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleRedirect = (page) => {
    if (page === "facebook") {
      //face
    } else if (page === "instagram") {
      //insta
    } else {
      //twitter
    }
  };

  return (
    <FooterContainer>
      <FooterCentralized>
        <Title style={{ cursor: "pointer" }}>False conosco</Title>
        <FooterCenterDiv>
          <FaFacebook
            style={{ cursor: "pointer" }}
            onClick={() => handleRedirect("facebook")}
            fontSize="35px"
          />
          <FaInstagram
            style={{ cursor: "pointer" }}
            onClick={() => handleRedirect("instagram")}
            fontSize="35px"
          />
          <FaTwitter
            style={{ cursor: "pointer" }}
            onClick={() => handleRedirect("twitter")}
            fontSize="35px"
          />
        </FooterCenterDiv>
        <Title style={{ cursor: "pointer" }}>Trabalhe Conosco</Title>
      </FooterCentralized>
    </FooterContainer>
  );
};

export default Footer;
