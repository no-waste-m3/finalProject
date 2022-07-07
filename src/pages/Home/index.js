import React from "react";
import Header from "../../components/Header";
import HomeProduct from "../../components/HomeProduct";
import CartButtonMobile from "../../components/CartButtonMobile";
import Filters from "../../components/Filters";
import {
  Container,
  ContentContainer,
  ContentUpperDiv,
  FiltersContainer,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <ContentUpperDiv>
          <FiltersContainer>
            <Filters />
          </FiltersContainer>
          <HomeProduct />
        </ContentUpperDiv>
        <CartButtonMobile />
      </ContentContainer>
    </Container>
  );
};
