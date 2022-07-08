import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CarouselStyled, InnerCarousel, ItemCarousel } from "./styled"

const Carousel = ({ dataImages, side }) => {

    const [translate, setTranslate] = useState(0)
    const [animationImage, setAnimationImage] = useState()

    setInterval(() => {

        if(translate>-200) {
            setTranslate(translate - 100)
        } else {
            setTranslate(0)
        }
        
        
    }, 5000);

   


    return (
        <CarouselStyled side={side}>
        <InnerCarousel animate={{x: `${translate}%`}}>
            {dataImages.map((item, index) => {
                return (
                    <ItemCarousel key={index}>
                        <p>{item.text}</p>
                        <img src={item.image} alt="imageCarousel" />
                    </ItemCarousel>
                )
            })}
        </InnerCarousel>
    </CarouselStyled>
    )

}

export default Carousel