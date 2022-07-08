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
import { BsArrowReturnLeft } from "react-icons/bs";
import CartProduct from "../CartProduct";
import CartReturnBtn from "../CartReturnButton";

const Cart = ({ setDisplayCart, displayCart }) => {
  //map em cartProducts

  return (
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
        <CartMiddleCentered>
          <CartProduct />
        </CartMiddleCentered>
      </CartMiddleDiv>
      <CartFooterDiv>
        <CartFooterCentered>
          <CartFooterPriceAndQtt>
            <Title color="black" fontSize="17px">
              Quantidade
            </Title>
            <Title color="var(--primary-color)" fontSize="17px">
              0
            </Title>
          </CartFooterPriceAndQtt>
          <CartFooterPriceAndQtt>
            <Title color="black" fontSize="17px">
              Preço
            </Title>
            <Title color="var(--primary-color)" fontSize="17px">
              R$ 6,60
            </Title>
          </CartFooterPriceAndQtt>
          <Button>Finalizar compra</Button>
        </CartFooterCentered>
      </CartFooterDiv>
    </CartContainer>
  );
};

export default Cart;
