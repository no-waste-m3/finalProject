import LogoNOWASTE from "../../assets/LogoNOWASTE.png";
import { LogoStyled } from "./styled";

const Logo = ({...rest}) => {

    return (
        <LogoStyled src={LogoNOWASTE} alt="logo" {...rest}/>
    )
}

export default Logo