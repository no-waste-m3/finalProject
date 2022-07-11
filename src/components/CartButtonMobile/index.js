import {
  Button,
  CartPriceContainer,
  QttCartPriceContainer,
  Titles,
  Centralized,
} from "./styled";
import CartQuantity from "../CartQuantity";
import CartPrice from "../CartPrice";

const CartButtonMobile = ({ setDisplayCart, displayCart }) => {
  return (
    <>
      <Button onClick={() => setDisplayCart(!displayCart)}>
        <Centralized>
          <QttCartPriceContainer>
            <CartQuantity color="white" fontSize="17px" />
            <CartPriceContainer>
              <Titles fontSize="21px">Carrinho</Titles>
              <CartPrice color="white" fontSize="17px" />
            </CartPriceContainer>
          </QttCartPriceContainer>
        </Centralized>
      </Button>
    </>
  );
};

export default CartButtonMobile;
