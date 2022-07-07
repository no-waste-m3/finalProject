import { Envelope, Eye, EyeSlash, IdentificationCard, Lock, User } from "phosphor-react"
import React, { useEffect, useState } from "react"
import { Button } from "../Button"
import InputField from "../Input"
import { FormRegisterStyled } from "./styled"

export const FormRegister = ({...rest}) => {

    const [typeInput, setTypeInput] = useState('password')
    const [iconInput, setIconInput] = useState()
    const [step, setStep] = useState(0)

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
        <FormStepper step={step} {...rest}>
            <div>
            <InputField label='Nome' Icon={<User size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Sobrenome' Icon={<IdentificationCard size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='E-mail' Icon={<Envelope size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Senha' Icon={<Lock size={20} color="var(--primary-color)" weight="fill"/>} SecondIcon={iconInput} type={typeInput} />
            <div><Button disabled={step === 0}>Back</Button><Button onClick={() => setStep(step+1)}>Next</Button></div>
            </div>

            <div>
            <InputField label='Tipo' Icon={<User size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='CPF' Icon={<IdentificationCard size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Contato' Icon={<Envelope size={20} color="var(--primary-color)" weight="fill" />}/>
            <div><Button onClick={() => setStep(step-1)} >Back</Button><Button onClick={() => setStep(step+1)}>Next</Button></div>
            </div>

            <div>
            <InputField label='Rua' Icon={<User size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Complemento' Icon={<IdentificationCard size={20} color="var(--primary-color)" weight="fill" />}/>
            <InputField label='Bairro' Icon={<Envelope size={20} color="var(--primary-color)" weight="fill" />}/>
            <div><Button onClick={() => setStep(step-1)} >Back</Button><Button disabled={step === 2} onClick={() => setStep(step+1)}>Next</Button></div>
            <Button>Cadastrar</Button>
            </div>

        </FormStepper>
    )
}

export const FormStepper = ({children, step}) => {

    const array = React.Children.toArray(children)
    const currentChildren = array[step]

    return (
        <FormRegisterStyled>
            {currentChildren}
        </FormRegisterStyled>
    )

}

