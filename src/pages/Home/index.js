import React, { useContext, useEffect, useState } from "react";
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
import { StoresContext } from "../../providers/Stores";
import StoresContainer from "../../components/StoresContainer";

export const Home = () => {
  const [viewerWidth, setViewerWidth] = useState(window.innerWidth);
  const [displayCart, setDisplayCart] = useState(true);
  const { stores } = useContext(StoresContext)
  
  window.addEventListener("resize", () => {
    setViewerWidth(window.innerWidth);
    window.innerWidth < 864 ? setDisplayCart(false) : setDisplayCart(true);
  });

  useEffect(() => {
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
            <Title color="var(--invert)" fontSize="15px">
              Eai, o que a barriguinha manda hoje?
            </Title>
          </TitleContainer>

          {stores.length === 0 ? (
            <ProductsContainer>
            <HomeProducts />
          </ProductsContainer>
          ): (
            <StoresContainer/>
          )}

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
