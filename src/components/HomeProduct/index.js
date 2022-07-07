import {
  ProductContainer,
  TitlesContainer,
  Img,
  AddBtnContainer,
  TitleContainer,
  Title,
} from "./styled";
import AddCartSVG from "../AddCartSVG";
import paes from "../../assets/paes.jpg";

const HomeProduct = () => {
  return (
    <ProductContainer>
      <Img alt="productImage" src={paes} />
      <TitlesContainer>
        <TitleContainer>
          <Title color="black" fontSize="16px" decoLine="none">
            Kit 5 pães + 200g de mortadela
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
            R$ 11,00
          </Title>
        </TitleContainer>
        <TitleContainer>
          <Title color="black" fontSize="29px" decoLine="none">
            Por:
          </Title>
          <Title color="var(--primary-color)" fontSize="29px" decoLine="none">
            R$ 3,30
          </Title>
        </TitleContainer>
      </TitlesContainer>
      <AddBtnContainer>
        <AddCartSVG />
      </AddBtnContainer>
    </ProductContainer>
  );
};

export default HomeProduct;
