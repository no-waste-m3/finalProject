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
    categoria: yup.string().required(),
    precoDeCusto: yup.string().required("Required Field"),
    precoDeRevenda: yup.string().required("Required Field"),
    precoOriginal: yup.string().required("Required Field"),
    pesoAprox: yup.string().required("Required Field"),
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

  const onSubmitFunction = (data) => {
    updateProduct(productToEdit.id , data);
    getProductsUser();
    setIsVisible(false);
  };

  return (
    <Modal typeModal="container">
      <Modal
        typeModal="primary"
        backgroundColor="var(--background)"
        padding="1rem 2.5rem"
        borderRadius="14px"
        mobile="yes"
        top="10%"
        left="13%"
      >
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <Title color='var(--invert)' tag="h1" titleSize="title1">
              Editar Produto
            </Title>
          </div>

          <Input
            register={register}
            name="nomeDoProduto"
            error={errors.nomeDoProduto?.message}
            Field="input"
            label="Nome do Produto"
            defaultValue={productToEdit.nomeDoProduto}
          />
          <Input
            register={register}
            name="descricao"
            error={errors.descricao?.message}
            Field="input"
            label="Descrição"
            defaultValue={productToEdit.descricao}
          />

          <Input
            register={register}
            name="categoria"
            error={errors.categoria?.message}
            Field="select"
            label="Categoria"
            defaultValue={productToEdit.categoria}
          >
            {category.map((cat, index) => {
              return (
                <option value={cat.toLocaleLowerCase()} key={index}>
                  {cat}
                </option>
              );
            })}
          </Input>

          <Input
            register={register}
            name="src"
            error={errors.src?.message}
            Field="input"
            label="Url da Imagem"
            defaultValue={productToEdit.src}
          />
          <Input
            register={register}
            name="precoDeCusto"
            error={errors.precoDeCusto?.message}
            Field="input"
            label="Preco de custo"
            defaultValue={productToEdit.precoDeCusto}
          />
          <Input
            register={register}
            name="precoDeRevenda"
            error={errors.precoDeRevenda?.message}
            Field="input"
            label="Preco de Revenda"
            defaultValue={productToEdit.precoDeRevenda}
          />

          <Input
            register={register}
            name="precoOriginal"
            error={errors.precoOriginal?.message}
            Field="input"
            label="Preco Orginal"
            defaultValue={productToEdit.precoOriginal}
          />

          <Input
            register={register}
            name="pesoAprox"
            error={errors.pesoAprox?.message}
            Field="input"
            label="Peso Estimado"
            defaultValue={productToEdit.pesoAprox}
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
