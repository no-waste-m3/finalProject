import { Container } from "./styled";
import paes from "../../assets/paes.jpg";
import { HomeProduct } from "../HomeProduct";
import { ProductsContext } from "../../providers/Products";
import { useContext } from "react";
import { ProductsFiltersContext } from "../../providers/ProductsFilters";

const HomeProducts = () => {
  const { products, productsUser, getProducts } = useContext(ProductsContext);
  const { filteredProducts } = useContext(ProductsFiltersContext);
  getProducts();
  // console.log(products);

  return (
    <Container>
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => {
            return <HomeProduct key={product.id} product={product} />;
          })
        : products.map((product) => {
            return <HomeProduct key={product.id} product={product} />;
          })}
    </Container>
  );
};
export default HomeProducts;
