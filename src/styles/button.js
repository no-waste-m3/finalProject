import styled, { css } from "styled-components";
import { ButtonStyled } from "../components/Button";

export const ButtonStyled = styled(Button)`
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  width: ${(props) => props.width};

  ${(props) => {
    switch (props.typebutton) {
      case "primary":
        return css`
          background-color: var(--primary-color);
          color: var(--white);

          &:hover {
            background-color: var(--hover-color);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--white);
          color: var(--primary-color);
        `;

      default:
        return null;
    }
  }}
`;
