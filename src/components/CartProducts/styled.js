import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  gap: 10px;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--primary-color);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--invert);
  }
`;
