import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, Div1, Div2, Text} from './styles';
import graphic from "../../assets/aboutUs2.png"
import about from "../../assets/aboutUs3.png"
import Wade from '../../components/Wade'

export const AboutUs =() =>  {
  return (
    <Container>
        <Header/>
            <Content>
              <Div1>
                <img src={graphic} alt=''/>
                <Text> Mais do que entregas, realizamos conexões.      
                  Nos unimos àqueles que querem fazer a 
                  diferença e que sonham com um mundo mais equalitário.
                  A No Waste nasceu da ideia de evitar perdas e desperdícios por parte dos restaurantes, 
                  de oferecer comida de qualidade por preços baixos e de agregar nosso trabalho ao de ONGs
                  e projetos que levam, através da comida, um pouco de dignidade e a acolhimento a populações
                  em situação de vulnerabilidade social.
                </Text>
              </Div1>
              <Div2>
              <Wade width='500px' height='800px'/>
              <img src={about} alt=''/>
              
              </Div2>
            </Content>
        <Footer/>
    </Container>
  );
}

