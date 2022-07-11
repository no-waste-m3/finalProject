import { createContext, useEffect, useState, useContext } from "react";

import { ProductsContext } from "../Products";

export const ProductsFiltersContext = createContext();

export const ProductsFiltersProvider = ({ children }) => {
  const { products, productsUser, getProducts } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (search) => {
    setFilteredProducts(
      products.filter((prod) => {
        return (
          prod.nomeDoProduto?.toLowerCase().includes(search.toLowerCase()) ||
          prod.categoria?.toLowerCase().includes(search.toLowerCase()) ||
          prod.descricao?.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  };

  const categoryFilters = (category) => {
    if (category === "todos") {
      return setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((prod) => {
          return prod.categoria?.toLowerCase().includes(category.toLowerCase());
        })
      );
    }
  };

  return (
    <ProductsFiltersContext.Provider
      value={{
        filteredProducts,
        filterProducts,
        categoryFilters,
      }}
    >
      {children}
    </ProductsFiltersContext.Provider>
  );
};
