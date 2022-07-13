
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, Div1, Div2, Text} from './styles';
import graphic from "../../assets/aboutUs2PNG.png"
import about from "../../assets/aboutUs3PNG.png"
import Wade from '../../components/Wade'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import CardApresentationData from '../../components/CardApresentationData';
import { ForkKnife, Recycle, Trash, UsersThree } from 'phosphor-react';
import { MdFoodBank, MdNoFood } from "react-icons/md";

export const AboutUs =() =>  {

  return (
    <Container>
        <Header/>
            <Content>
              <Div1>
                <img src={graphic} alt=''/>
                <div>
                <Text> Mais do que entregas, realizamos conexões.      
                  Nos unimos àqueles que querem fazer a 
                  diferença e que sonham com um mundo mais equalitário.
                  A No Waste nasceu da ideia de evitar perdas e desperdícios por parte dos restaurantes, 
                  de oferecer comida de qualidade por preços baixos e de agregar nosso trabalho ao de ONGs
                  e projetos que levam, através da comida, um pouco de dignidade e a acolhimento a populações
                  em situação de vulnerabilidade social.
                </Text>
                <div>
                  <h3>Você sabia?</h3>
                  <div>
                  <CardApresentationData text="O descarte de alimentos no mundo gera um prejuízo econômico de cerca de R$ 3 trilhões por ano" Icon={<RiMoneyDollarCircleFill color="#d17b0c" size={'35%'}/>}/>
                  <CardApresentationData text="1,3 bilhão de toneladas de alimentos são jogados no lixo todos os anos no mundo" Icon={<Recycle size={'35%'} color="red"/>}/>
                  <CardApresentationData text="Suficiente para alimentar mais de 19 milhões de brasileiros" Icon={<UsersThree size={'45%'} color="#ebb982" weight="fill" />}/>
                  <CardApresentationData text="13,6 milhões passam fome" Icon={<ForkKnife size={'45%'} color="#3B9F5A" weight="fill" />}/>
                  </div>


                </div>
                </div>
              </Div1>
              <Div2>
              <Wade width='400px' height='600px'/>
              <img src={about} alt=''/>
              </Div2>
            </Content>
        <Footer/>
    </Container>
  );
};
