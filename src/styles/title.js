import styled, { css } from "styled-components";
import { BaseTypograph } from "../components/BaseTypograph";

export const Title = styled(BaseTypograph)`
  color: ${(props) => props.color};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  font-family: "Montserrat", sans-serif;

  ${(props) => {
    switch (props.titleSize) {
      case "title1":
        return css`
          font-size: 1.375rem;
        `;
      case "title2":
        return css`
          font-size: 1.25rem;
        `;
      case "title3":
        return css`
          font-size: 1.125rem;
        `;
      case "title4":
        return css`
          font-size: 1rem;
        `;
      case "p":
        return css`
          font-size: 1rem;
        `;
      case "small":
        return css`
          font-size: 0.75rem;
        `;

      default:
        return null;
    }
  }}
`;
