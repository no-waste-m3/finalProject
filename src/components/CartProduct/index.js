import {
  ProdContainer,
  ImgContainer,
  Img,
  NameContainer,
  RemoveBtnContainer,
  Title,
} from "./styled";
import { BsTrashFill } from "react-icons/bs";
import LogoNOWASTE from "../../assets/LogoNOWASTE.png";

const CartProduct = ({ product }) => {
  //   const { img, title, price1, price2 } = product;

  return (
    <ProdContainer>
      <ImgContainer>
        <Img alt="productImage" src={LogoNOWASTE} />
      </ImgContainer>
      <NameContainer>
        <Title color="black" fontSize="11px">
          Kit 5 pães + 200g de mortadela
        </Title>
        <Title color="var(--primary-color)" fontSize="20px">
          R$ 3,30
        </Title>
      </NameContainer>
      <RemoveBtnContainer>
        <BsTrashFill
          style={{ cursor: "pointer" }}
          color="var(--primary-color)"
          fontSize="20px"
        />
      </RemoveBtnContainer>
    </ProdContainer>
  );
};

export default CartProduct;
