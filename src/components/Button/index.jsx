import { ButtonStyled } from "./style";

export const Button = ({ className, children, typebutton, ...rest }) => {
  return (
      <ButtonStyled className={className} typebutton={typebutton} {...rest}>
        {children}
      </ButtonStyled>
  );
};
