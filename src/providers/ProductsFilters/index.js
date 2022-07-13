import { createContext, useEffect, useState, useContext } from "react";

import { ProductsContext } from "../Products";
import { StoresContext } from "../Stores";

export const ProductsFiltersContext = createContext();

export const ProductsFiltersProvider = ({ children }) => {
  const { products, productsUser, getProducts } = useContext(ProductsContext);
  const { getStores, setStores } = useContext(StoresContext)

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (search) => {
    setStores([])
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
      setStores([])
      return setFilteredProducts([]);
    } else if(category === 'stores') {

     getStores()
      
      
    } else {
      setStores([])
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
        categoryFilters
      }}
    >
      {children}
    </ProductsFiltersContext.Provider>
  );
};
