import { StyledModal } from "./styles";

export const Modal = ({
  width,
  height,
  padding,
  borderRadius,
  top,
  left,
  backColor,
}) => {
  return (
    <StyledModal
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      top={top}
      left={left}
      backColor={backColor}
    ></StyledModal>
  );
};
