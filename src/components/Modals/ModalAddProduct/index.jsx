import { Modal } from "..";
import { Title } from "../../../styles/title";
import { Button } from "../../Button";
import Input from "../../Input";
import { StyledForm } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const ModalAddProduct = () => {
  const schema = yup.object().shape({
    nomeDoProduto: yup.string().required("Required field"),
    descricao: yup.string().required("Required Field"),
    src: yup.string().required("Required Field"),
    categoria: yup.string().required(),
    precoDeCusto: yup.string().required("Required Field"),
    precoDeRevenda: yup.string().required("Required Field"),
  });

  const category = [
    "Pizzaria",
    "Burger",
    "Mercado",
    "Padaria",
    "Doces",
    "Cafeteria",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Modal typeModal="container">
      <Modal
        typeModal="primary"
        backgroundColor="var(--white-0)"
        padding="2.5rem"
        borderRadius="14px"
        mobile="yes"
      >
        <StyledForm>
          <div>
            <Title tag="h1" titleSize="title1">
              Adicionar Novo Produto
            </Title>
          </div>

          <Input
            register={register}
            name="nomeDoProduto"
            error={errors.nomeDoProduto?.message}
            Field="input"
            label="Nome do Produto"
          />
          <Input
            register={register}
            name="descricao"
            error={errors.descricao?.message}
            Field="input"
            label="Descrição"
          />

          <select name="categoria" id="">
            {category.map((cat, index) => {
              return (
                <option value={cat.toLocaleLowerCase()} key={index}>
                  {cat}
                </option>
              );
            })}
          </select>

          <Input
            register={register}
            name="src"
            error={errors.src?.message}
            Field="input"
            label="Url da Imagem"
          />
          <Input
            register={register}
            name="precoDeCusto"
            error={errors.precoDeCusto?.message}
            Field="input"
            label="Preco de custo"
          />
          <Input
            register={register}
            name="precoDeRevenda"
            error={errors.precoDeRevenda?.message}
            Field="input"
            label="Preco de Revenda"
          />

          <div className="modal__buttons">
            <Button typebutton="secondary">Enviar</Button>
            <Button typebutton="primary">Fechar</Button>
          </div>
        </StyledForm>
      </Modal>
    </Modal>
  );
};
