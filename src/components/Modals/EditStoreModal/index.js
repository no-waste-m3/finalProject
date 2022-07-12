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
    contact: yup.string().required("Required Field"),
    cnpj: yup.string().required("Required Field"),
    address: yup.string().required("Required Field"),
    cep: yup.string().required("Required Field"),
    street: yup.string().required("Required Field"),
    neighborhood: yup.string().required("Required Field"),
    number: yup.string().required("Required Field"),
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
        backgroundColor="var(--white-0)"
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
            <Title tag="h1" titleSize="title1">
              Solicitar Edição de Loja
            </Title>
          </div>

          <Input
            register={register}
            name="name"
            error={errors.name?.message}
            Field="input"
            label="Nome da Loja"
            defaultValue={user.info?.name}
          />

          <Input
            register={register}
            name="contact"
            error={errors.contact?.message}
            Field="input"
            label="Contato"
            defaultValue={user.info?.contato}
          />

          <Input
            register={register}
            name="cnpj"
            error={errors.cnpj?.message}
            Field="input"
            label="CNPJ"
            defaultValue={user.info?.CNPJ}
          />

          <Title tag="h2" titleSize="title1">
            Endereço
          </Title>

          <Input
            register={register}
            name="street"
            error={errors.street?.message}
            Field="input"
            label="Rua"
            defaultValue={user.info?.address.street}
          />

          <Input
            register={register}
            name="cep"
            error={errors.cep?.message}
            Field="input"
            label="CEP"
            defaultValue={user.info?.address.cep}
          />

          <Input
            register={register}
            name="neighborhood"
            error={errors.neighborhood?.message}
            Field="input"
            label="Bairro"
            defaultValue={user.info?.address.district}
          />

          <Input
            register={register}
            name="number"
            error={errors.number?.message}
            Field="input"
            label="Numero"
            defaultValue={user.info?.address.number}
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
