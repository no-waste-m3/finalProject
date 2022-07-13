import React, { useContext, useState } from "react";
import Header from "../../components/Header";

import { Modal } from "../../components/Modals";
import {
  StyledBalanceDiv,
  StyledStoreDiv,
  StyledProductsDiv,
  Container,
  ProductCardDiv,
  ProducrCard,
  ProductCard,
} from "./styles";

import { Title } from "../../styles/title";
import { MdStore } from "react-icons/md";
import { FaBalanceScale, FaEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { Button } from "../../components/Button";
import { ProductsContext } from "../../providers/Products";
import { ModalAddProduct } from "../../components/Modals/ModalAddProduct";
import { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { notify } from "../../components/Toasts";
import { ThemeToastContext } from "../../providers/ThemeToast";
import { EditAddProduct } from "../../components/Modals/EditModal";
import { useNavigate } from "react-router-dom";
import { EditStore } from "../../components/Modals/EditStoreModal";

export const Dashboard = () => {
  const { changeThemeToast } = useContext(ThemeToastContext);

  const user = JSON.parse(localStorage.getItem('@userNoWaste'));

  const { productsUser, deleteProduct, updateProduct, getProductsUser } =
    useContext(ProductsContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () =>
    setWindowWidth(window.innerWidth)
  );

  useEffect(()=> {
  }, [windowWidth])


  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [editStore, setEditStore] = useState(false);
  const [productToEdit, setProductToEdit] = useState();

  const navigate = useNavigate();

  return (
    <Container>
      <Header />

      {addModal && <ModalAddProduct setIsVisible={setAddModal} />}

      {updateModal && (
        <EditAddProduct
          setIsVisible={setUpdateModal}
          productToEdit={productToEdit}
        />
      )}

      {editStore && <EditStore setIsVisible={setEditStore} user={user} />}

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
            color={"var(--invert)"}
            fontStyle={"inherit"}
            weight={"400"}
            padding={"0"}
          >
            {user.name || user.razaoSocial || 'Empresa'}
          </Title>
          <figure
            onClick={() => setEditStore(!editStore)}
            style={{ cursor: "pointer" }}
          >
            <FaEdit />
          </figure>
        </div>
      </StyledStoreDiv>

      {windowWidth > 741 ? (
        <StyledBalanceDiv>
          <div>
            <figure
              onClick={() => navigate("/home/dashboard/stats")}
              style={{ cursor: "pointer" }}
            >
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
                color={"var(--invert)"}
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
                color={"var(--invert)"}
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
                color={"var(--invert)"}
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
        <div className="header-div">
          <Title
            tag={"h3"}
            titleSize={"h3"}
            color={"var(--invert)"}
            fontStyle={"inherit"}
            weight={"600"}
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
          {productsUser.length === 0 || productsUser === undefined ? (
            <>
              <Title
                tag={"h4"}
                titleSize={"h4"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"600"}
              >
                Sem produtos Cadastrados
              </Title>
              <Title
                tag={"p"}
                titleSize={"small"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"600"}
              >
                Bora cadastrar alguns e reduzir a perda do dia?
              </Title>
            </>
          ) : (
            <ProductCardDiv>
              {productsUser.map((product) => (
                <ProductCard key={product.id}>
                  <div className="action-buttons">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateModal(!updateModal);
                        setProductToEdit(product);
                      }}
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(product.id) && getProductsUser()
                      }
                    >
                      <BsTrash />
                    </button>
                  </div>

                  <div className="img-info">
                    <img src={product.src} />
                  </div>
                  <div className="product-info">
                    {windowWidth > 741 ? (
                      <div className="name-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--primary-color)"}
                          fontStyle={"inherit"}
                          weight={"600"}
                        >
                          {product.nomeDoProduto}
                        </Title>
                      </div>
                    ) : (
                      <div className="name-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--primary-color)"}
                          fontStyle={"inherit"}
                          weight={"600"}
                        >
                          {product.nomeDoProduto}
                        </Title>
                      </div>
                    )}

                    {windowWidth > 741 ? (
                      <div className="description-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          {product.descricao}
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          Categoria: {product.categoria}
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          Peso Aproximado: {product.pesoEstimado}Kg
                        </Title>
                      </div>
                    ) : (
                      <div className="description-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          {product.descricao}
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          {product.categoria}
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          {product.pesoEstimado}Kg
                        </Title>
                      </div>
                    )}

                    {windowWidth > 741 ? (
                      <div className="price-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          Preço de Custo:
                          <Title
                            tag={"small"}
                            titleSize={"small"}
                            color={"var(--primary-color)"}
                            fontStyle={"inherit"}
                            weight={"600"}
                          >
                            {product.precoDeCusto}
                          </Title>
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          Preço de Revenda:
                          <Title
                            tag={"small"}
                            titleSize={"small"}
                            color={"var(--primary-color)"}
                            fontStyle={"inherit"}
                            weight={"600"}
                          >
                            {product.precoDeRevenda}
                          </Title>
                        </Title>
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--grey-4)"}
                          fontStyle={"inherit"}
                          weight={"400"}
                        >
                          Preço Original:
                          <Title
                            tag={"small"}
                            titleSize={"small"}
                            color={"var(--primary-color)"}
                            fontStyle={"inherit"}
                            weight={"600"}
                          >
                            {product.precoOriginal}
                          </Title>
                        </Title>
                      </div>
                    ) : (
                      <div className="price-div">
                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--primary-color)"}
                          fontStyle={"inherit"}
                          weight={"600"}
                        >
                          {product.precoDeCusto}
                        </Title>

                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--primary-color)"}
                          fontStyle={"inherit"}
                          weight={"600"}
                        >
                          {product.precoDeRevenda}
                        </Title>

                        <Title
                          tag={"small"}
                          titleSize={"small"}
                          color={"var(--primary-color)"}
                          fontStyle={"inherit"}
                          weight={"600"}
                        >
                          {product.precoOriginal}
                        </Title>
                      </div>
                    )}
                  </div>
                </ProductCard>
              ))}
            </ProductCardDiv>
          )}
        </div>
      </StyledProductsDiv>
    </Container>
  );
};
