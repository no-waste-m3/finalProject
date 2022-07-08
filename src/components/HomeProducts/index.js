import { Container } from "./styled";
import paes from "../../assets/paes.jpg";
import { HomeProduct } from "../HomeProduct";

const HomeProducts = () => {
  const products = [
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 1,
    },
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 2,
    },
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 3,
    },
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 4,
    },
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 5,
    },
    {
      nomeDoProduto: "Kit 5 pães + 200g de mortadela",
      img: paes,
      descricao: "Kit 5 pães + 200g de mortadela",
      precoDeCusto: 3,
      precoDeRevenda: 4,
      userId: 3,
      id: 6,
    },
  ];
  return (
    <Container>
      {products.map((product) => {
        return <HomeProduct key={product.id} product={product} />;
      })}
    </Container>
  );
};
export default HomeProducts;
