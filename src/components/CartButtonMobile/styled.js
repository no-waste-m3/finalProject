import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (min-width: 865px) {
    display: none;
  }
`;

export const QttCartPriceContainer = styled.div`
  width: 86.6%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartPriceContainer = styled.div`
  width: 66%;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 450px) {
    width: 62%;
  }
  @media (min-width: 600px) {
    width: 60%;
  }
`;

export const Titles = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  color: white;
`;
