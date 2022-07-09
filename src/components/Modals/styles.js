import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  ${(props) => {
    switch (props.typeModal) {
      case "primary":
        return css`
          position: absolute;
          background-color: ${(props) => props.backgroundColor};
          padding: ${(props) => props.padding};

          top: ${(props) => props.top || "25vh"};
          right: ${(props) => props.right};
          left: ${(props) => props.left || "20vw"};
          bottom: ${(props) => props.bottom};

          border: ${(props) => props.border};
          border-top: ${(props) => props.borderTop};

          z-index: 2;

          border-radius: ${(props) => props.borderRadius};

          width: ${(props) => props.width};
          background-color: var(--white-0);

          @media (min-width: 760px) {
            left: 33vw;
          }

          @media (min-width: 1400px) {
            left: 38vw;
          }
        `;

      case "container":
        return css`
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 2;
        `;

      case "allPage":
        return css`
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        `;

      default:
        return null;
    }
  }}
`;
