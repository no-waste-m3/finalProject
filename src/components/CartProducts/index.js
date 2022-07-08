import { ProductsContainer } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import CartProduct from "../CartProduct";

const CartProducts = () => {
  const { cart } = useContext(CartContext);

  return (
    <ProductsContainer>
      {cart.map((product, index) => (
        <CartProduct key={index} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default CartProducts;
