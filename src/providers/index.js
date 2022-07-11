import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { ProductsProvider } from "./Products";
import { ThemeProvider } from "./Theme";
import { ThemeToastProvider } from "./ThemeToast";


export const Providers = ({ children }) => {
  return (
    <ThemeToastProvider>
      <FormProvider>
        <ProductsProvider>
          <ThemeProvider>
          <CartProvider>{children}</CartProvider>
          </ThemeProvider>
        </ProductsProvider>
      </FormProvider>
    </ThemeToastProvider>
  );
};
