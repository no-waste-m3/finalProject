import { motion } from "framer-motion";
import styled from "styled-components";


export const CarouselStyled = styled(motion.div)`
    overflow: hidden;
    width: 18rem;

    @media (max-width: 545px) {
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