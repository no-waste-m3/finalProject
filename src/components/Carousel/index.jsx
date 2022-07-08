import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CarouselStyled, InnerCarousel, ItemCarousel } from "./styled"

const Carousel = ({ dataImages }) => {

    const [translate, setTranslate] = useState(0)
    const [animationImage, setAnimationImage] = useState()

    setInterval(() => {

        if(translate>-36) {
            setTranslate(translate - 18)
        } else {
            setTranslate(0)
        }
        
    }, 5000);

   


    return (
        <CarouselStyled side='right'>
        <InnerCarousel animate={{x: `${translate}rem`}}>
            {dataImages.map((image, index) => {
                return (
                    <ItemCarousel key={index}>
                        <img src={image} alt="imageCarousel" />
                    </ItemCarousel>
                )
            })}
        </InnerCarousel>
    </CarouselStyled>
    )

}

export default Carousel