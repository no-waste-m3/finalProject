import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import CartButtonMobile from "../../components/CartButtonMobile";
import Filters from "../../components/Filters";
import {
  Container,
  ContentContainer,
  ContentUpperDiv,
  FiltersContainer,
  ProductsContainer,
  Title,
  TitleContainer,
} from "./styles";
import HomeProducts from "../../components/HomeProducts";
import Cart from "../../components/Cart";

export const Home = () => {
  const [viewerWidth, setViewerWidth] = useState(window.innerWidth);
  const [displayCart, setDisplayCart] = useState(true);
  //console.log(displayCart)
  window.addEventListener("resize", () => {
    console.log('resixze')
    setViewerWidth(window.innerWidth);
    window.innerWidth < 864 ? setDisplayCart(false) : setDisplayCart(true);
  });

  useEffect(() => {
    console.log('montagem')
    setViewerWidth(window.innerWidth);
    window.innerWidth < 864 ? setDisplayCart(false) : setDisplayCart(true);
  }, []);

  return (
    <Container>
      <Header
        needSearchBar={true}
        viewerWidth={viewerWidth}
        setViewerWidth={setViewerWidth}
      />
      <ContentContainer>
        <ContentUpperDiv>
          <FiltersContainer>
            <Filters />
          </FiltersContainer>
          <TitleContainer>
            <Title color="black" fontSize="15px">
              eai, o que a barriguinha manda hoje?
            </Title>
          </TitleContainer>

          <ProductsContainer>
            <HomeProducts />
          </ProductsContainer>

          {displayCart && (
            <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
          )}
        </ContentUpperDiv>
        <CartButtonMobile
          setDisplayCart={setDisplayCart}
          displayCart={displayCart}
        />
      </ContentContainer>
    </Container>
  );
};
