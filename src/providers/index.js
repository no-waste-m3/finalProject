import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { ProductsProvider } from "./Products";

export const Providers = ({ children }) => {
  return (
    <FormProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </FormProvider>
  );
};
