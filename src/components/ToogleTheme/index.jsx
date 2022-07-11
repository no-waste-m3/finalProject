import { MotionConfig } from "framer-motion"
import { Cloud, Moon, Sparkle, StarFour, Sun, SunDim } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "../../providers/Theme"
import { ToogleStyled } from "./styled"
import { motion } from "framer-motion"
import { WiStars } from "react-icons/wi";


export const ToogleTheme = ({...rest}) => {

    const { theme, changeTheme } = useContext(ThemeContext)

    const animation = theme === 'light' ? {
        x: '0px',
        rotateY: [180, 0],
        rotate: [350, 0]

    } : {
        rotateY: [0, 180],
        rotate: [0, 350],
        x: '18px'
    }

    const animationDetails = theme === 'light' ? {
        x: '20px',

    } : {
        //rotateY: [0, 180],
        //rotate: [0, 360],
        x: '0px'
    }

    return (
        <ToogleStyled {...rest} theme={theme} onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
            <motion.div animate={animation} transition={{duration: 1}}>
            {theme === 'light' ? <Sun size={24} weight="fill" /> : <Moon size={24}  weight="fill" />}
            </motion.div>
            <motion.div animate={animationDetails} transition={{duration: 1}}>{theme === 'light' ? <Cloud size={24} weight="fill" /> : <WiStars/>}</motion.div>
        </ToogleStyled>
    )

}

