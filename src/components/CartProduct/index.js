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
  const {
    nomeDoProduto,
    descricao,
    src,
    categoria,
    pesoAprox,
    precoOriginal,
    precoDeCusto,
    precoDeRevenda,
    id,
    userId,
  } = product;

  return (
    <ProdContainer key={product.id}>
      <ImgContainer>
        <Img alt="productImage" src={product.src} />
      </ImgContainer>
      <NameContainer>
        <Title color="var(--invert)" fontSize="11px">
          {nomeDoProduto}
        </Title>
        <Title color="var(--primary-color)" fontSize="20px">
          {priceFormat(precoDeRevenda)}
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
