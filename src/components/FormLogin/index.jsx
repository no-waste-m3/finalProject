import {
  Envelope,
  Eye,
  EyeSlash,
  Lock,
} from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import { FormLoginStyled } from "./styled";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import { FormContext } from "../../providers/Form";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ ...rest }) => {
  const [typeInput, setTypeInput] = useState("password");
  const [iconInput, setIconInput] = useState();
  const { loginUser, user } = useContext(FormContext)

  const submitFunction = async (data) => {
    await loginUser(data, false)
  }
  

  const changeType = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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


  return (
    
    <FormLoginStyled onSubmit={handleSubmit(submitFunction)}>
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

        
        <Button typebutton='secondary'  type='submit' >Login</Button>
        
    </FormLoginStyled>
  );
};

