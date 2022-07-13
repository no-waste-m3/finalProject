import { Modal } from "..";
import { Title } from "../../../styles/title";
import { Button } from "../../Button";
import Input from "../../Input";
import { StyledForm } from "./styled";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../providers/Products";
import { useContext, useEffect, useProvider } from "react";
import { notify } from "../../Toasts";
import { ThemeToastContext } from "../../../providers/ThemeToast";
import { FormContext } from "../../../providers/Form";

export const EditStore = ({ setIsVisible, user }) => {

  const { changeThemeToast } = useContext(ThemeToastContext);

  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    razaoSocial:  yup.string().required("Required field"),
    contato: yup.string().required("Required Field"),
    CNPJ: yup.string().required("Required Field"),
    CPF: yup.string().required("Required Field"),
    endereco: yup.string().required("Required Field"),
    cep: yup.string().required("Required Field"),
    rua: yup.string().required("Required Field"),
    bairro: yup.string().required("Required Field"),
    numero: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {

  };

  return (
    <Modal typeModal="container">
      <Modal
        typeModal="primary"
        backgroundColor="var(--background)"
        padding="2.5rem"
        borderRadius="14px"
        left="13%"
      >
        <StyledForm onSubmit={(data) => {
            setIsVisible(false);
            changeThemeToast("success");
            notify("Solicitação de alteração de dados enviada!", 3000, "success");
            handleSubmit(onSubmitFunction);
            }}>
          <div>
            <Title color='var(--invert)' tag="h1" titleSize="title1">
              Solicitar Edição de Loja
            </Title>
          </div>

          <Input
            register={register}
            name={user.info?.razaoSocial ? 'razaoSocial' : 'name'}
            error={errors[user.info?.razaoSocial ? 'razaoSocial' : 'name']?.message}
            Field="input"
            label="Nome da Loja"
            defaultValue={user.info?.razaoSocial || user.info?.name}
          />

          <Input
            register={register}
            name="contato"
            error={errors.contato?.message}
            Field="input"
            label="Contato"
            defaultValue={user.info?.contato}
          />

          <Input
            register={register}
            name={user.info?.CNPJ ? 'CNPJ' : 'CPF'}
            error={errors[user.info?.CNPJ ? 'CNPJ' : 'CPF']?.message}
            Field="input"
            label={user.info?.CNPJ ? 'CNPJ' : 'CPF'}
            defaultValue={user.info?.CNPJ || user.info.CPF}
          />

          <Title color='var(--invert)' tag="h2" titleSize="title1">
            Endereço
          </Title>

          <Input
            register={register}
            name="rua"
            error={errors.rua?.message}
            Field="input"
            label="Rua"
            defaultValue={user.info?.endereco.rua}
          />

          <Input
            register={register}
            name="cep"
            error={errors.cep?.message}
            Field="input"
            label="CEP"
            defaultValue={user.info?.endereco.cep}
          />

          <Input
            register={register}
            name="bairro"
            error={errors.bairro?.message}
            Field="input"
            label="Bairro"
            defaultValue={user.info?.endereco.bairro}
          />

          <Input
            register={register}
            name="numero"
            error={errors.numero?.message}
            Field="input"
            label="Numero"
            defaultValue={user.info?.endereco.numero}
          />

          <div className="modal__buttons">
            <Button typebutton="secondary" type="submit">
              Editar
            </Button>
            <Button typebutton="primary" onClick={() => setIsVisible(false)}>
              Fechar
            </Button>
          </div>
        </StyledForm>
      </Modal>
    </Modal>
  );
};
