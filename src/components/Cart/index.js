import {
  CartContainer,
  CartTitleRtrnContainer,
  CartTitleCentered,
  CartMiddleDiv,
  CartMiddleCentered,
  CartFooterDiv,
  CartFooterCentered,
  CartFooterPriceAndQtt,
  Title,
  Button,
} from "./styled";
import CartReturnBtn from "../CartReturnButton";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../providers/Cart";
import CartQuantity from "../CartQuantity";
import CartPrice from "../CartPrice";
import SadWade from "../SadWadeSVG";
import SadWadeAnimated from "../SadWadeAnimated";
import { getByPlaceholderText } from "@testing-library/react";
import CartProducts from "../CartProducts";

const Cart = ({ setDisplayCart, displayCart }) => {
  const { cart, getCart } = useContext(CartContext);

  getCart();

  return (
        <CartContainer
          animate={{ scale: displayCart ? [0, 1] : [1, 0] }}
          transition={{ duration: 0.4 }}
          style={cart.length === 0 && { height: "300px" }}
        >
          <CartTitleRtrnContainer>
            <CartTitleCentered>
              <CartReturnBtn setDisplayCart={setDisplayCart} />
              <Title color="var(--invert)" fontSize="23px">
                Carrinho
              </Title>
            </CartTitleCentered>
          </CartTitleRtrnContainer>
          {cart.length === 0 ? (
            <>
          <SadWadeAnimated />
          <Title color="var(--invert)" fontSize="17px">
            Seu carrinho está vazio
          </Title>
          <Title style={{ paddingBottom: "15px" }} color="grey" fontSize="14px">
            Adicione itens
          </Title>
          </>

          ) : (
            <>

            <CartMiddleDiv>
            <CartMiddleCentered>
              <CartProducts />
            </CartMiddleCentered>
          </CartMiddleDiv>
          <CartFooterDiv>
            <CartFooterCentered>
              <CartFooterPriceAndQtt>
                <Title color="var(--invert)" fontSize="17px">
                  Quantidade
                </Title>
                <CartQuantity color="var(--primary-color)" fontSize="17px" />
              </CartFooterPriceAndQtt>
              <CartFooterPriceAndQtt>
                <Title color="var(--invert)" fontSize="17px">
                  Preço
                </Title>
                <CartPrice color="var(--primary-color)" fontSize="17px" />
              </CartFooterPriceAndQtt>
              <Button>Finalizar compra</Button>
            </CartFooterCentered>
      </CartFooterDiv>
      </> )}
      </CartContainer>

  );
};

export default Cart;
