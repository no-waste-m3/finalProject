import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  width: ${(props) => props.width};

  ${(props) => {
    switch (props.typebutton) {
      case "primary":
        return css`
          background-color: var(--primary-color);
          color: var(--white-0);

          &:hover {
            background-color: var(--hover-color);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--white-0);
          color: var(--primary-color);

          &:hover {
            background-color: var(--primary-color);
            color: var(--white-0);
          }
        `;

      default:
        return null;
    }
  }}
`;
