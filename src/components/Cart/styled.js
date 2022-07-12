import { motion } from "framer-motion";
import styled from "styled-components";

export const CartContainer = styled(motion.div)`
  width: 325px;
  height: 535px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 14;
  border-radius: 15px;
  border: 1px solid var(--primary-color);
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.25);
  @media (min-width: 865px) {
    width: 290px;
    height: 450px;
    box-shadow: none;
    right: 1vw;
    top: 21%;
    z-index: 8;
  }
  @media (min-width: 1000px) {
    right: 6.5vw;
    top: 20%;
  }
`;

export const CartTitleRtrnContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  justify-content: center;
`;
export const CartTitleCentered = styled.div`
  width: 295px;
  height: 100%;
  display: flex;
  align-items: center;
  @media (min-width: 865px) {
    width: 270px;
    justify-content: center;
  }
`;

export const CartMiddleDiv = styled.div`
  width: 100%;
  height: 334px;
  border-bottom: 1px solid var(--grey-1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 865px) {
    height: 272px;
  }
`;
export const CartMiddleCentered = styled.ul`
  width: 295px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 865px) {
    width: 278px;
    height: 258px;
  }
`;

export const CartFooterDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 865px) {
    height: 128px;
  }
`;

export const CartFooterCentered = styled.div`
  width: 295px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 865px) {
    width: 270px;
    height: 108px;
  }
`;

export const CartFooterPriceAndQtt = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 865px) {
    height: 25px;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  border: 0;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  width: 265px;
  height: 35px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 19px;
  @media (min-width: 865px) {
    height: 30px;
    width: 250px;
  }
`;
