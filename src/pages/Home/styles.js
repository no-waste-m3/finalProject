import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 700px) {
    height: 91.22%;
    margin: 0;
  }
`;

export const ContentUpperDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 700px) {
    height: fit-content;
    gap: 15px;
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const ProductsContainer = styled.div``;
