import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 12vh;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 89.35%;
  /* margin-top: 72px; */
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
  height: 77%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 865px) {
    height: fit-content;
    gap: 15px;
    align-items: unset;
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: 10.5vh;
  justify-content: center;
  @media (min-width: 865px) {
    margin-top: 0;
  }
`;

export const ProductsContainer = styled.div`
  width: 86.6%;
  height: 355px;
  overflow-x: auto;
  /* overflow-y: auto; */
  @media (min-width: 700px) {
    width: 80%;
    /* margin-left: 11.7%; */
  }
  @media (min-width: 865px) {
    width: 50%;
    margin-left: 11.7%;
  }
  @media (min-width: 1260px) {
    overflow-x: unset;
  }
`;

export const TitleContainer = styled.div`
  width: 86.6%;
  display: flex;
  align-items: center;
  height: fit-content;
  justify-content: flex-start;
  @media (min-width: 700px) {
    margin-left: 11.7%;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.color};
  font-weight: 500;
  font-family: "Montserrat";
  font-size: ${(props) => props.fontSize};
  display: flex;
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;
