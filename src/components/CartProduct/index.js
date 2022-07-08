import {
  ProdContainer,
  ImgContainer,
  Img,
  NameContainer,
  RemoveBtnContainer,
  Title,
} from "./styled";
import { BsTrashFill } from "react-icons/bs";
import priceFormat from "../../util/priceFormat";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";

const CartProduct = ({ product }) => {
  const { deleteCart } = useContext(CartContext);
  const { nomeDoProduto, descricao, preco, userId, id, img } = product;

  return (
    <ProdContainer key={product.id}>
      <ImgContainer>
        <Img alt="productImage" src={product.img} />
      </ImgContainer>
      <NameContainer>
        <Title color="black" fontSize="11px">
          {nomeDoProduto}
        </Title>
        <Title color="var(--primary-color)" fontSize="20px">
          {priceFormat(preco)}
        </Title>
      </NameContainer>
      <RemoveBtnContainer>
        <BsTrashFill
          onClick={() => deleteCart(id)}
          style={{ cursor: "pointer" }}
          color="var(--primary-color)"
          fontSize="20px"
        />
      </RemoveBtnContainer>
    </ProdContainer>
  );
};

export default CartProduct;
