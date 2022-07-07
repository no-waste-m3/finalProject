import styled from "styled-components";

export const LogoStyled = styled.img`
    width: ${(props) => props.lw};
    //height: ${(props) => props.lh};

    @media (max-width: 740px) {
    width: ${(props) => props.mw};
    //height: ${(props) => props.mh};
  }

  @media (max-width: 450px) {
    width: ${(props) => props.sw};
    //height: ${(props) => props.sh};
  }

`