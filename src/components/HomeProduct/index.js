import {
  ProductContainer,
  TitlesContainer,
  Img,
  AddBtnContainer,
  TitleContainer,
  Title,
} from "./styled";
import AddCartSVG from "../AddCartSVG";
import priceFormat from "../../util/priceFormat";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";

export const HomeProduct = ({ product }) => {
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
    <ProductContainer key={product.id}>
      <Img alt="productImage" src={src} />
      <TitlesContainer>
        <TitleContainer>
          <Title color="black" fontSize="16px" decoLine="none">
            {nomeDoProduto}
          </Title>
        </TitleContainer>
        <TitleContainer>
          <Title color="black" fontSize="16px" decoLine="none">
            De:
          </Title>
          <Title
            color="var(--primary-color)"
            fontSize="16px"
            decoLine="line-through"
          >
            {priceFormat(precoOriginal)}
          </Title>
        </TitleContainer>
        <TitleContainer>
          <Title color="black" fontSize="29px" decoLine="none">
            Por:
          </Title>
          <Title color="var(--primary-color)" fontSize="29px" decoLine="none">
            {priceFormat(precoDeRevenda)}
          </Title>
        </TitleContainer>
      </TitlesContainer>
      <AddBtnContainer>
        <AddCartSVG style={{ cursor: "pointer" }} product={product} />
      </AddBtnContainer>
    </ProductContainer>
  );
};
