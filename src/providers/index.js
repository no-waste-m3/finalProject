import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { ProductsProvider } from "./Products";
import { ThemeToastProvider } from "./ThemeToast";

export const Providers = ({ children }) => {
  return (
    <ThemeToastProvider>
      <FormProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </FormProvider>
    </ThemeToastProvider>
  );
};
