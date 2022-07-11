import { useContext } from "react";
import LogoNOWASTE from "../../assets/LogoNOWASTE.png";
import LogoWhite from "../../assets/LogoWhite.png"
import { ThemeContext } from "../../providers/Theme";
import { LogoStyled } from "./styled";

const Logo = ({...rest}) => {

    const { theme } = useContext(ThemeContext)

    return (
        <LogoStyled src={theme === 'light' ? LogoNOWASTE : LogoWhite} alt="logo" {...rest}/>
    )
}

export default Logo