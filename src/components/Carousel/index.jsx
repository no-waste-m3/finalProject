import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CarouselStyled, InnerCarousel, ItemCarousel } from "./styled"

const Carousel = ({ dataImages, side }) => {

    const [translate, setTranslate] = useState()
    const [animationImage, setAnimationImage] = useState()

  useEffect(() => {
    const animation = window.innerWidth < 620 ? { y: ["-200%", "0%"], x: {} } : {x: [`${side === 'left' && '-'}100%`, '0%']}
    setAnimationImage(animation)
    setTranslate(0)
  }, []);

    let intervalCarousel 

    const autoChangeImage = () => {

         intervalCarousel = setInterval(() => {

            if(translate < dataImages.length - 1) {
                setTranslate(translate + 1)
            } else {
                setTranslate(0)
            }
            
            
        }, 5000);

    }

    useEffect(() => {

        autoChangeImage()

        return () => clearInterval(intervalCarousel)

    }, [translate])

   


    return (
        <CarouselStyled side={side}>
        <InnerCarousel>
            {dataImages.map((item, index) => {
                return (
                    <ItemCarousel key={index} className={ index === translate ? 'currentImage' : 'otherImage'} >
                        {index === translate && <><motion.p animate={animationImage}>{item.text}</motion.p>
                        <motion.img animate={animationImage} src={item.image} alt="imageCarousel" /></>   
                    }
                    </ItemCarousel>
                )
            })}
        </InnerCarousel>
    </CarouselStyled>
    )

}

export default Carousel