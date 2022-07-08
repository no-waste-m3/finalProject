import {
  AddressBook,
  At,
  Bank,
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
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import ProgressBarStep from "../ProgressBarStep";
import { FormRegisterStyled, StepButtons } from "./styled";
import { useForm } from "react-hook-form";
import { schemas } from "./validation";
import axios from "axios";

export const FormRegister = ({ ...rest }) => {
  const [typeInput, setTypeInput] = useState("password");
  const [iconInput, setIconInput] = useState();
  const [step, setStep] = useState(0);
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')

  const submitFunction = (data) => {
    if(step<2) {
      setStep(step + 1)
    } else {
      const {type, account, email, password, name, cep, contact, district, number, street, identify} = data

      console.log({type, account, email, password, 
        info: {
        name, 
        contact,
        identify,
        address: {
          cep, district, number, street
        }

      }})

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

  return (
      <>
      <ProgressBarStep step={step} stepsCounters={[0,1,2]} isValid={isValid}/>
    <FormStepper step={step} {...rest} onSubmit={handleSubmit(submitFunction)}>
      <div>
        <Input
        register={register}
        name="name"
        error={errors.name?.message}
        Field = 'input'
          label="Nome"
          Icon={<User size={20} color="var(--primary-color)" weight="fill" />}
        />
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
        name="identify"
        error={errors.identify?.message}
        Field = 'input'
          label="CPF"
          Icon={
            <IdentificationCard
              size={20}
              color="var(--primary-color)"
              weight="fill"
            />
          }
        />
        <Input
        register={register}
        name="contact"
        error={errors.contact?.message}
        Field = 'input'
          label="Contato"
          Icon={
            <AddressBook size={20} color="var(--primary-color)" weight="fill" />
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
        <Button type='submit'>Cadastrar</Button>
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
