import { Container } from "./styled";
import paes from "../../assets/paes.jpg";
import { HomeProduct } from "../HomeProduct";
import { ProductsContext } from "../../providers/Products";
import { useContext } from "react";

const HomeProducts = () => {
  const { products, productsUser, getProducts } = useContext(ProductsContext);
  getProducts()
  //console.log(products);

  return (
    <Container>
      {products.map((product) => {
        return <HomeProduct key={product.id} product={product} />;
      })}
    </Container>
  );
};
export default HomeProducts;
