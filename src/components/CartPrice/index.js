import { Title } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import priceFormat from "../../util/priceFormat";

const CartPrice = ({ color, fontSize }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Title color={color} fontSize={fontSize}>
        {priceFormat(
          cart.reduce(
            (counter, actual) => (counter += actual.precoDeRevenda),
            0
          )
        )}
      </Title>
    </>
  );
};

export default CartPrice;
