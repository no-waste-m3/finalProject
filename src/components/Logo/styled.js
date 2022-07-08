import styled from "styled-components";

export const LogoStyled = styled.img`
    width: ${(props) => props.lw};
    height: auto;
    //height: ${(props) => props.lh};

    @media (max-width: 740px) {
    width: ${(props) => props.mw};
    height: auto;

    //height: ${(props) => props.mh};
  }

  @media (max-width: 450px) {
    height: auto;
    width: ${(props) => props.sw};
    //height: ${(props) => props.sh};
  }

`