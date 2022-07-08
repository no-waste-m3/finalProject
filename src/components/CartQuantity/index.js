import { Title } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";

const CartQuantity = ({ color, fontSize }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Title color={color} fontSize={fontSize}>
        {cart.length}
      </Title>
    </>
  );
};

export default CartQuantity;
