import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  ${(props) => {
    switch (props.typeModal) {
      case "primary":
        return css`
        position: absolute;
        background-color: ${(props) => props.backgroundColor};
        padding: ${(props) => props.padding};

        top:${(props) => props.top};
        right: ${(props) => props.right};
        left: ${(props) => props.left};
        bottom: ${(props) => props.bottom};
        
        border:${(props) => props.border} ;
        border-top: ${(props) => props.borderTop};

        z-index: 2;

        border-radius: ${(props) => props.borderRadius};

        width: ${(props) => props.width}
        background-color: var(--white-0);
        
        
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

      default:
        return null;
    }
  }}
`;
