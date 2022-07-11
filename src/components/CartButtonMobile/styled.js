import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
  width: 86.6%;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 15px;
  @media (min-width: 865px) {
    display: none;
  }
`;

export const QttCartPriceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Centralized = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
`;

export const CartPriceContainer = styled.div`
  width: 66%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 410px) {
    width: 64%;
  }
  @media (min-width: 520px) {
    width: 62%;
  }
  @media (min-width: 610px) {
    width: 60%;
  }
  @media (min-width: 685px) {
    width: 59%;
  }
  @media (min-width: 730px) {
    width: 58%;
  }
  @media (min-width: 820px) {
    width: 57%;
  }
`;

export const Titles = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  color: white;
`;
