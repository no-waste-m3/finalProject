import { BsArrowReturnLeft } from "react-icons/bs";
import { Container } from "./styled";

const CartReturnBtn = () => {
  return (
    <Container>
      <BsArrowReturnLeft
        fontSize="24px"
        color="white"
        style={{ marginRight: "75px", cursor: "pointer" }}
      />
    </Container>
  );
};

export default CartReturnBtn;
