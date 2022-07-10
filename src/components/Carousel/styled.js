import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components";

export const CarouselStyled = styled(motion.div)`
  overflow: hidden;
  width: 45%;
  height: 90vh;
  position: absolute;
  top: 10%;
  z-index: 3;
  ${(props) => {
    if (props.side === "right") {
      return css`
        right: 0%;
      `;
    } else {
      return css`
        left: 0%;
      `;
    }
  }}

  @media (max-width: 620px) {
    top: -1.5rem;
    width: 100%;
  height: fit-content;

  }
`;
export const InnerCarousel = styled(motion.div)`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;

  > .otherImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
  }

  > .currentImage {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ItemCarousel = styled(motion.div)`
  min-width: 18rem;
  height: 28rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 100%;
  }

  > p {
    font-weight: 500;
    padding: 0.5rem;
  }

  @media (max-width: 620px) {
    margin-top: -5%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 80%;
    height: 15rem;
    gap: 0;

    > img {
      width: 35%;
      margin-top: 10%;
      height: auto;
    }

    > p {
      //color: rgb(107, 158, 11);
      font-size: 0.8rem;
      border-radius: 1rem;
      //background-color: rgba(107, 158, 11,0.5);
    }
  }

  @media (max-width: 520px) {

    height: 42vh;
    > img {
      height: 100%;
    }
  }
`;
