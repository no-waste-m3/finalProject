import { ProductsContainer } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import CartProduct from "../CartProduct";

const CartProducts = ({onCheckout=false}) => {
  const { cart } = useContext(CartContext);

  return (
    <ProductsContainer>
      {cart.map((product) => (
        <CartProduct key={product.id} product={product} onCheckout={onCheckout} />
      ))}
    </ProductsContainer>
  );
};

export default CartProducts;
