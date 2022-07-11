import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseTypograph } from "../../components/BaseTypograph";
import Logo from "../../components/Logo";
import images from "../../data/carouselData";
import Carousel from "../../components/Carousel";
import { ButtonStyled, Container, LinkStyled, LoginFormContainer, LoginPage } from "./styles";
import { FormLogin } from "../../components/FormLogin";
import { Button } from "../../components/Button";
import { ToogleTheme } from "../../components/ToogleTheme";



export const Login = () => {
  const [animate, setAnimate] = useState()
  useEffect(() => {
    const animation = window.innerWidth < 620 ? { y: ["100%", "10%"], x: {} } : { x: ["100%", "5%"], y: {} }
    setAnimate(animation)
  }, []);

  /*window.addEventListener("resize", () => {

    const animation = window.innerWidth < 620 ? { y: ["100%", "10%"], x: {} } : { x: ["100%", "5%"], y: {} }
    setAnimate(animation)
    
  })*/

  return (
    <LoginPage>
      
      <LoginFormContainer>
      <ToogleTheme/>
      <LinkStyled to='home/about'>Saiba mais</LinkStyled>
        <Logo lw="50%" mw="70%" sw="55%"/>
        <h2>Login</h2>
        <FormLogin />
        <BaseTypograph tag="small">
          Não tem uma conta? <Link to="signUp">Criar conta</Link>
        </BaseTypograph>
      </LoginFormContainer>
      <Container animate={animate}  ></Container>
       <Carousel side='left' dataImages={images}/>
    </LoginPage>
  );
};
