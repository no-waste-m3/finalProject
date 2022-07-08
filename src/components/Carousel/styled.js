import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components";


export const CarouselStyled = styled(motion.div)`
    overflow: hidden;
    width: 18rem;
    position: absolute;
    bottom: 10%;
    z-index: 3;
    ${(props) => {
        if(props.side === 'right') {
            return css`
                right: 10%;
            `
        } else {
            return css`
                left: 10%;
            `
        }
    }}

    @media (max-width: 620px) {
        display: none;  
    }
`

export const InnerCarousel = styled(motion.div)`
    display: flex;
`

export const ItemCarousel = styled(motion.div)`
    min-width: 18rem;
    height: 25rem;
    >img {
        width: 100%;
        height: 100%;
    }
`