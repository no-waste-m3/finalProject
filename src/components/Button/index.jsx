export const ButtonStyled = ({ className, children, ...rest }) => {
  return (
    <>
      <button className={className} {...rest}>
        {children}
      </button>
    </>
  );
};
