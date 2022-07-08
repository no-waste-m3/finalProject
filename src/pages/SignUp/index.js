import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseTypograph } from "../../components/BaseTypograph";
import { FormRegister } from "../../components/FormRegister";
import Logo from "../../components/Logo";
import images from "../../data/carouselData";
import Carousel from "../../components/Carousel";

import { Container, LinkStyled, RegisterFormContainer, RegisterPage } from "./styles";

export const SignUp = () => {
  const [animate, setAnimate] = useState()
  //const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const animation = window.innerWidth < 620 ? { y: ["100%", "10%"], x: {} } : { x: ["-100%", "-5%"], y: {} }
    setAnimate(animation)
  }, []);

  return (
    <RegisterPage>
      <Container animate={animate}  ></Container>
      <RegisterFormContainer>
      <LinkStyled to='home/about'>Saiba mais</LinkStyled>
        <Logo lw="10rem" mw="8rem" sw="7rem" />
        <h2>Criar conta</h2>
        <FormRegister />
        <BaseTypograph tag="small">
          Já tem uma conta? <Link to="/">Login</Link>
        </BaseTypograph>
      </RegisterFormContainer>
       <Carousel side='right' dataImages={images}/>
    </RegisterPage>
  );
};
