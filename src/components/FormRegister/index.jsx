import { Envelope, Eye, EyeSlash, Lock } from "phosphor-react"
import { useEffect, useState } from "react"
import InputField from "../Input"
import { FormRegisterStyled } from "./styled"

const FormRegister = ({...rest}) => {

    const [typeInput, setTypeInput] = useState('password')
    const [iconInput, setIconInput] = useState()

    const changeType = () => {
        
        typeInput === 'password' ?
        setTypeInput('text') : setTypeInput('password')
    }

    useEffect(() => {

        typeInput === 'password' ?
        setIconInput(<Eye size={20} color="var(--primary-color)" weight="fill" onClick={changeType} />) :
        setIconInput(<EyeSlash size={20} color="var(--primary-color)" weight="fill" onClick={changeType} />)

    }, [typeInput])

    return (
        <FormRegisterStyled {...rest}>
            
            <InputField label='E-mail' Icon={<Envelope size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Senha' Icon={<Lock size={20} color="var(--primary-color)"/>} weight="fill" SecondIcon={iconInput} type={typeInput} />

        </FormRegisterStyled>
    )
}

export default FormRegister