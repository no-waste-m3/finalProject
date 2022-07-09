import { StyledModal } from "./styles";

export const Modal = ({
  typeModal,
  backgroundColor,
  top,
  right,
  left,
  bottom,
  width,
  padding,
  borderRadius,
  border,
  borderTop,
  children,
  ...rest
}) => {
  return (
    <StyledModal {...rest}
      typeModal={typeModal}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      width={width}
      padding={padding}
      border={border}
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderRadius={borderRadius}
    >
      {children}
    </StyledModal>
  );
};
