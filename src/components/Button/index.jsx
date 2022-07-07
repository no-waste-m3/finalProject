import { Title } from "../../styles/title";
import { ButtonStyled } from "./style";

export const Button = ({ className, children, typebutton, ...rest }) => {
  return (
      <ButtonStyled className={className} typebutton={typebutton} {...rest}>
        <Title tag="h4" titleSize="title4">
          {children}
        </Title>
      </ButtonStyled>
  );
};
