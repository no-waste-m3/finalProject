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
    height: 28rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    
    >img {
        width: 100%;
        height: 100%;
    }

    >p {
        font-weight: 600;
        padding: 0.5rem;
    }
    
    @media (max-width: 620px) {
        margin-top: -5%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-width: 100%;
        height: 15rem;
        gap: 0;

        >img {
        width: 40%;
        height: 80%;
        }

        >p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 520px) {

        >img {
        height: 100%;
        }
        
    }
`