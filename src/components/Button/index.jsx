import { Title } from "../../styles/title";
import { ButtonStyled } from "./style";

export const Button = ({ className, children, type, typebutton, ...rest }) => {
  return (
      <ButtonStyled className={className} type={type} typebutton={typebutton} {...rest}>
        <Title tag="h4" titleSize="title4">
          {children}
        </Title>
      </ButtonStyled>
  );
};
