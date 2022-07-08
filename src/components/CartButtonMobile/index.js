import {
  Button,
  CartPriceContainer,
  QttCartPriceContainer,
  Titles,
} from "./styled";
import CartQuantity from "../CartQuantity";
import CartPrice from "../CartPrice";

const CartButtonMobile = ({ setDisplayCart, displayCart }) => {
  return (
    <>
      <Button onClick={() => setDisplayCart(true)}>
        <QttCartPriceContainer>
          <CartQuantity color="white" fontSize="18px" />
          <CartPriceContainer>
            <Titles fontSize="23px">Carrinho</Titles>
            <CartPrice color="white" fontSize="18px" />
          </CartPriceContainer>
        </QttCartPriceContainer>
      </Button>
    </>
  );
};

export default CartButtonMobile;
