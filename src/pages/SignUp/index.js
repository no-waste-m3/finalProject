import React from 'react';
import { Link } from 'react-router-dom';
import { BaseTypograph } from '../../components/BaseTypograph';
import Carousel from '../../components/Carousel';
import { FormRegister } from '../../components/FormRegister';
import Logo from '../../components/Logo';
import images from '../../data/carouselData'

import { Container, RegisterFormContainer, RegisterPage } from './styles';

export const SignUp =() =>  {
  return (
    <RegisterPage>
    <Container>
      <RegisterFormContainer>
        <Logo lw='10rem' mw='8rem' sw='7rem'/>
        <h2>Criar conta</h2>
        <FormRegister/>
        <BaseTypograph tag='small'>
          Já tem uma conta? <Link to='/'>Login</Link>
        </BaseTypograph>
      </RegisterFormContainer>
      <Carousel dataImages={images}/>
    </Container>
    </RegisterPage>
  );
}