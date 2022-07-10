import {
  AddressBook,
  At,
  Bank,
  Buildings,
  Envelope,
  Eye,
  EyeSlash,
  FastForward,
  Hash,
  House,
  IdentificationCard,
  Lock,
  MapPin,
  Rewind,
  User,
  UserSwitch,
} from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import ProgressBarStep from "../ProgressBarStep";
import { FormRegisterStyled, StepButtons } from "./styled";
import { useForm } from "react-hook-form";
import { schemas } from "./validation";
import axios from "axios";
import { FormContext } from "../../providers/Form";
import { doUpload } from "../../services/apiImgur";

export const FormRegister = ({ ...rest }) => {
  const [typeInput, setTypeInput] = useState("password");
  const [iconInput, setIconInput] = useState();
  const [step, setStep] = useState(0);
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [typeIdentify, setTypeIdentify] = useState('CPF')

  const { registerUser } = useContext(FormContext)

  const submitFunction = (data) => {
    if(step<2) {
      setStep(step + 1)
    } else {
      const {type, account, email, password, name, cep, contact, district, number, street, CNPJ, CPF} = data

      const dataUser = {type, account, email, password, 
        info: {
        name, 
        contact,
        address: {
          cep, district, number, street
        }
      }}

      if(CPF) {
        dataUser.info.CPF = CPF
      } else {
        dataUser.info.CNPJ = CNPJ
      }

      registerUser(dataUser)

    }
  }

  const getTypeIdentity = (e) => {

    if(e.target.value === 'PJ') {
      setTypeIdentify('CNPJ')
    } else if(e.target.value === 'PF') {
      setTypeIdentify('CPF')
    }

  }


  const changeType = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  useEffect(() => {
    typeInput === "password"
      ? setIconInput(
          <Eye
            size={20}
            color="var(--primary-color)"
            weight="fill"
            onClick={changeType}
          />
        )
      : setIconInput(
          <EyeSlash
            size={20}
            color="var(--primary-color)"
            weight="fill"
            onClick={changeType}
          />
        );
  }, [typeInput]);

  const getAddress = async (e) => {
    const cep = e.target.value
    if(cep.length>=8) {
       axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(address => {
          //setDistrict(address.data.bairro)
          //setStreet(address.data.logradouro)
          setValue('district', address.data.bairro , { shouldValidate: true })
          setValue('street', address.data.logradouro , { shouldValidate: true })
          
        })
    }


     
   
  }

  const submitTestImage = async (e) => {
    e.preventDefault()

    
    const image = document.getElementById('image')
    
    const data = new FormData()
    console.log(image.files[0])
    data.append('file', image.files[0])
    doUpload(data)
    
  }

  return (
      <>
      <ProgressBarStep step={step} stepsCounters={[0,1,2]} isValid={isValid}/>
    <FormStepper step={step} {...rest} /*onSubmit={submitTestImage}*/ onSubmit={handleSubmit(submitFunction)}>
      {/*<div>
        <input type="file" id="image" />
        <Button/>
  </div>*/}
      <div>
        <Input
        register={register}
        name="account"
        error={errors.account?.message}
          Field = 'select'
          label="Tipo"
          Icon={
            <UserSwitch
              size={20}
              color="var(--primary-color)"
              weight="fill"
            />
          }
        >
          <option value="">Comprador ou vendedor?</option>
          <option value="seller">Vendedor</option>
          <option value="buyer">Comprador</option>
        </Input>
        <Input
        register={register}
        name="email"
        error={errors.email?.message}
        Field = 'input'
          label="E-mail"
          Icon={
            <Envelope size={20} color="var(--primary-color)" weight="fill" />
          }
        />
        <Input
        register={register}
        name="password"
        error={errors.password?.message}
        Field = 'input'
          label="Senha"
          Icon={<Lock size={20} color="var(--primary-color)" weight="fill" />}
          SecondIcon={iconInput}
          type={typeInput}
        />

<Input
        register={register}
        name="contato"
        error={errors.contato?.message}
        Field = 'input'
          label="Contato"
          Icon={<AddressBook size={20} color="var(--primary-color)" weight="fill" />}
        />
        <StepButtons>
        <Button typebutton="primary" type='submit'>
        <FastForward size={16} color="#fff" weight="fill" />
          </Button>
          <Button typebutton="primary" disabled={step === 0}>
            <Rewind size={16} color="#fff" weight="fill" />
          </Button>
         
          
        </StepButtons>
      </div>

      <div>
        <Input
        register={register}
        name="type"
        error={errors.type?.message}
        onInput={getTypeIdentity}
        Field = 'select'
          label="Conta"
          Icon={<Bank size={20} color="var(--primary-color)" weight="fill" />}
        >
          <option value=""></option>
          <option value="PF">PF</option>
          <option value="PJ">PJ</option>
        </Input>
        <Input
        register={register}
        name={typeIdentify === 'CNPJ' ? "responsavel" : "name"}
        error={errors[typeIdentify === 'CNPJ' ? "responsavel" : "name"]?.message}
        Field = 'input'
          label={typeIdentify === 'CNPJ' ? "Responsável" : "Nome completo"}
          Icon={<User size={20} color="var(--primary-color)" weight="fill" />}
        />
        {typeIdentify === 'CNPJ' && <Input
        register={register}
        name="razaoSocial"
        error={errors.razaoSocial?.message}
        Field = 'input'
          label="Razão Social"
          Icon={
            <Buildings
              size={20}
              color="var(--primary-color)"
              weight="fill"
            />
          }
        /> }
        <Input
        register={register}
        name={typeIdentify}
        error={errors[typeIdentify]?.message}
        Field = 'input'
          label={typeIdentify}
          Icon={
            <IdentificationCard
              size={20}
              color="var(--primary-color)"
              weight="fill"
            />
          }
        />
        <StepButtons>
        <Button typebutton="primary" type='submit'>
          
          <FastForward size={16} color="#fff" weight="fill" />
          </Button>
          <Button typebutton="primary" onClick={() => setStep(step - 1)}>
            <Rewind size={16} color="#fff" weight="fill" />
          </Button>
        </StepButtons>
      </div>

      <div>
        <div>
        <Input
        register={register}
        name="cep"
        error={errors.cep?.message}
        onInput={getAddress}
        Field = 'input'
          label="CEP"
          Icon={<Hash size={20} color="var(--primary-color)" weight="fill" />}
        />
        <Input
        register={register}
        name="number"
        error={errors.number?.message}
        Field = 'input'
          label="Número"
          Icon={<House size={20} color="var(--primary-color)" weight="fill" />}
        />
        </div>
        <Input
        register={register}
        name="street"
        error={errors.street?.message}
        //value={street}
        //onInput={(e) => setStreet(e.target.value)}
        onChange={(e) => setStreet(e.target.value)}

        Field = 'input'
          label="Rua"
          Icon={
            <At
              size={20}
              color="var(--primary-color)"
              weight="fill"
            />
          }
        />
        <Input
        register={register}
        name="district"
        //value={district}
        //onInput={(e) => setDistrict(e.target.value)}
        onChange={(e) => setDistrict(e.target.value)}
        error={errors.district?.message}
        Field = 'input'
          label="Bairro"
          Icon={
            <MapPin size={20} color="var(--primary-color)" weight="fill" />
          }
        />
        <StepButtons>
          <Button
            typebutton="primary"
            disabled={step === 2}
          >
            <FastForward size={16} color="#fff" weight="fill" />
          </Button>
            <Button typebutton="primary" onClick={() => setStep(step - 1)}>
            <Rewind size={16} color="#fff" weight="fill" />
          </Button>
            
        </StepButtons>
        <Button typebutton='secondary'  type='submit' >Cadastrar</Button>
      </div>
    </FormStepper>
    </>
  );
};

export const FormStepper = ({ children, step, ...rest }) => {
  const array = React.Children.toArray(children);
  const currentChildren = array[step];

  return <FormRegisterStyled {...rest}>{currentChildren}</FormRegisterStyled>;
};
