import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components";


export const CarouselStyled = styled(motion.div)`
    overflow: hidden;
    width: 18rem;
    height: fit-content;
    position: absolute;
    bottom: 10%;
    z-index: 3;
    ${(props) => {
        if(props.side === 'right') {
            return css`
                right: 0%;
            `
        } else {
            return css`
                left: 0%;
            `
        }
    }}

    @media (max-width: 620px) {
        top: 0%;
        width: 100%;

    }
`
export const InnerCarousel = styled(motion.div)`
    display: flex;
`

export const ItemCarousel = styled(motion.div)`
    min-width: 18rem;
    height: 25rem;
    display: flex;
    flex-direction: column;

    >img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 620px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-width: 100%;
        height: 15rem;

        >img {
        width: 40%;
    }
    }
`