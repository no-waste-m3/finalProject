import React, { useState } from "react";
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
  const [viewerWidth, setViewerWidth] = useState(window.screen.availWidth);
  const [isSearching, setIsSearching] = useState(false);
  const [asidePages, setAsidePages] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  window.addEventListener("resize", () => {
    setViewerWidth(window.screen.availWidth)
  })

  return (
    <Container>
      <Header
        viewerWidth={viewerWidth}
        setViewerWidth={setViewerWidth}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        asidePages={asidePages}
        setAsidePages={setAsidePages}
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
          {viewerWidth > 864 ? (
            <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
          ) : (
            displayCart && (
              <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
            )
          )}
        </ContentUpperDiv>
        <CartButtonMobile setDisplayCart={setDisplayCart} />
      </ContentContainer>
    </Container>
  );
};
