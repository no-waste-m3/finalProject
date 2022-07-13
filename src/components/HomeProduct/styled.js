import styled from "styled-components";

export const ProductContainer = styled.div`
 
  width: 190px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  //position: relative;
  @media (min-width: 600px) {
    width: 200px;
    height: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 45%;
`;

export const TitlesContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 400px) {
    height: 45%;
  }
`;
export const AddBtnContainer = styled.div`
  width: 100%;
  text-align: end;
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
