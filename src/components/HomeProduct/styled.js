import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 235px;
  height: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 700px) {
    width: 200px;
    height: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 35.77%;
`;

export const TitlesContainer = styled.div`
  height: 50.13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const AddBtnContainer = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  align-items: center;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.p`
  color: ${(props) => props.color};
  font-weight: 500;
  font-family: "Montserrat";
  font-size: ${(props) => props.fontSize};
  text-decoration-line: ${(props) => props.decoLine};
`;
