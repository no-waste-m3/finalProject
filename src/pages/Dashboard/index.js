import React, { useContext, useState } from "react";
import Header from "../../components/Header";

import { Modal } from "../../components/Modals";
import {
  StyledBalanceDiv,
  StyledStoreDiv,
  StyledProductsDiv,
  Container,
} from "./styles";
import { Title } from "../../styles/title";
import { MdStore } from "react-icons/md";
import { FaBalanceScale, FaEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { Button } from "../../components/Button";
import { ProductsContext } from "../../providers/Products";
import { ModalAddProduct } from "../../components/Modals/ModalAddProduct";
import { useEffect } from "react";

export const Dashboard = () => {
  const data = useContext(ProductsContext);
  const [windowWidth, setWindowWidth] = useState(window.screen.availWidth);
  window.addEventListener("resize", () =>
    setWindowWidth(window.screen.availWidth)
  );
  const [addModal, setAddModal] = useState(false);
  const [userProducts, setUserProducts] = useState(
    data.getProductsUser() || []
  );

  return (
    <Container>
      <Header />

      {addModal && <ModalAddProduct />}

      <StyledStoreDiv>
        <div>
          <figure>
            <MdStore />
          </figure>
          <Title
            tag={"h3"}
            titleSize={"h3"}
            color={"var(--primary-color)"}
            fontStyle={"inherit"}
            weight={"400"}
            padding={"0"}
          >
            Minha Loja
          </Title>
        </div>
        <div className="name-edit-div">
          <Title
            tag={"h4"}
            titleSize={"h4"}
            color={"var(--grey-4)"}
            fontStyle={"inherit"}
            weight={"400"}
            padding={"0"}
          >
            Padaria Santa Rosa
          </Title>
          <figure>
            <FaEdit />
          </figure>
        </div>
      </StyledStoreDiv>

      {windowWidth > 740 ? (
        <StyledBalanceDiv>
          <div>
            <figure>
              <FaBalanceScale />
            </figure>
            <Title
              tag={"h3"}
              titleSize={"h3"}
              color={"var(--primary-color)"}
              fontStyle={"inherit"}
              weight={"400"}
              padding={"0"}
            >
              Balanço
            </Title>
          </div>
          <div className="text-div">
            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Produtos
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Vendas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Perdas Evitadas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>
          </div>
        </StyledBalanceDiv>
      ) : (
        <></>
      )}

      <StyledProductsDiv>
        <div>
          <Title
            tag={"h3"}
            titleSize={"h3"}
            color={"var(--grey-4)"}
            fontStyle={"inherit"}
            weight={"600"}
            padding={"0"}
          >
            Meus Produtos
          </Title>
          <Button
            className={"add-products-button"}
            typebutton={"secondary"}
            onClick={() => setAddModal(!addModal)}
          >
            Adicionar
          </Button>
        </div>
        <div className="products-div">
          {userProducts.length === 0 || userProducts === undefined ? (
            <>
              <Title
                tag={"h4"}
                titleSize={"h4"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"600"}
                padding={"0"}
              >
                Sem produtos Cadastrados
              </Title>
              <Title
                tag={"p"}
                titleSize={"small"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"600"}
                padding={"0"}
              >
                Bora cadastrar alguns e reduzir a perda do dia?
              </Title>
            </>
          ) : (
            <></>
          )}
        </div>
      </StyledProductsDiv>
    </Container>
  );
};
