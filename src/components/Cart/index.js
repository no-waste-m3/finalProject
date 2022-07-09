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
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import CartQuantity from "../CartQuantity";
import CartPrice from "../CartPrice";
import SadWade from "../SadWadeSVG";
import SadWadeAnimated from "../SadWadeAnimated";

const Cart = ({ setDisplayCart, displayCart }) => {
  const { cart } = useContext(CartContext);
  //map em cartProducts

  return (
    <>
      {cart.length > 0 ? (
        <CartContainer>
          <CartTitleRtrnContainer>
            <CartTitleCentered>
              <CartReturnBtn setDisplayCart={setDisplayCart} />
              <Title color="white" fontSize="23px">
                Carrinho
              </Title>
            </CartTitleCentered>
          </CartTitleRtrnContainer>
          <CartMiddleDiv>
            <CartMiddleCentered>{/* <CartProduct /> */}</CartMiddleCentered>
          </CartMiddleDiv>
          <CartFooterDiv>
            <CartFooterCentered>
              <CartFooterPriceAndQtt>
                <Title color="black" fontSize="17px">
                  Quantidade
                </Title>
                <CartQuantity color="var(--primary-color)" fontSize="17px" />
              </CartFooterPriceAndQtt>
              <CartFooterPriceAndQtt>
                <Title color="black" fontSize="17px">
                  Preço
                </Title>
                <CartPrice color="var(--primary-color)" fontSize="17px" />
              </CartFooterPriceAndQtt>
              <Button>Finalizar compra</Button>
            </CartFooterCentered>
          </CartFooterDiv>
        </CartContainer>
      ) : (
        <CartContainer style={{ height: "300px" }}>
          <CartTitleRtrnContainer>
            <CartTitleCentered>
              <CartReturnBtn setDisplayCart={setDisplayCart} />
              <Title color="white" fontSize="23px">
                Carrinho
              </Title>
            </CartTitleCentered>
          </CartTitleRtrnContainer>
          <SadWadeAnimated/>
          <Title color="black" fontSize="17px">
            Seu carrinho está vazio
          </Title>
          <Title style={{ paddingBottom: "15px" }} color="grey" fontSize="14px">
            Adicione itens
          </Title>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
