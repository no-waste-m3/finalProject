import { Modal } from "..";
import { Title } from "../../../styles/title";
import { Button } from "../../Button";
import Input from "../../Input";
import { StyledForm } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../providers/Products";
import { useContext, useProvider } from "react";


export const EditAddProduct = ({ setIsVisible, productToEdit }) => {

  const { updateProduct, getProductsUser } = useContext(ProductsContext);

  const schema = yup.object().shape({
    nomeDoProduto: yup.string().required("Required field"),
    descricao: yup.string().required("Required Field"),
    src: yup.string().required("Required Field"),
    precoDeCusto: yup.string().required("Required Field"),
    precoDeRevenda: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    updateProduct(data);
    getProductsUser();
    setIsVisible(false);
  };

  return (
    <Modal typeModal="container">
      <Modal
        typeModal="primary"
        backgroundColor="var(--white-0)"
        padding="2.5rem"
        borderRadius="14px"
        mobile="yes"
        top="10%"
        left="13%"
      >
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <Title tag="h1" titleSize="title1">
              Editar Produto
            </Title>
          </div>

          <Input
            register={register}
            name="nomeDoProduto"
            error={errors.nomeDoProduto?.message}
            Field="input"
            label="Nome do Produto"
            placeholder={productToEdit.nomeDoProduto}
          />
          <Input
            register={register}
            name="descricao"
            error={errors.descricao?.message}
            Field="input"
            label="Descrição"
            placeholder={productToEdit.descricao}
          />
          <Input
            register={register}
            name="src"
            error={errors.src?.message}
            Field="input"
            label="Url da Imagem"
            placeholder={productToEdit.descricao}
          />
          <Input
            register={register}
            name="precoDeCusto"
            error={errors.precoDeCusto?.message}
            Field="input"
            label="Preco de custo"
            placeholder={productToEdit.precoDeCusto}
          />
          <Input
            register={register}
            name="precoDeRevenda"
            error={errors.precoDeRevenda?.message}
            Field="input"
            label="Preco de Revenda"
            placeholder={productToEdit.precoDeRevenda}
          />

          <div className="modal__buttons">
            <Button typebutton="secondary" type='submit'>Editar</Button>
            <Button typebutton="primary" onClick={() => setIsVisible(false)}>Fechar</Button>
          </div>
        </StyledForm>
      </Modal>
    </Modal>
  );
};