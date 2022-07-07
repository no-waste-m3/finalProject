import { InputField, InputStyled } from "./styled"

const Input = ({label, Icon, SecondIcon, ...rest}) => {
    
    return (
        <InputField>
            <label>{label}</label>
            {Icon && Icon}
            <InputStyled {...rest}/>
            {SecondIcon && SecondIcon}
        </InputField>
    )
}

export default Input