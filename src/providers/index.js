import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { IsLoadingProvider } from "./IsLoading";
import { ProductsProvider } from "./Products";
import { ProductsFiltersProvider } from "./ProductsFilters";
import { ThemeProvider } from "./Theme";
import { ThemeToastProvider } from "./ThemeToast";

export const Providers = ({ children }) => {
  return (
    <IsLoadingProvider>
    <ThemeToastProvider>
      <FormProvider>
        <ProductsProvider>
          <ProductsFiltersProvider>
            <ThemeProvider>
              <CartProvider>{children}</CartProvider>
            </ThemeProvider>
          </ProductsFiltersProvider>
        </ProductsProvider>
      </FormProvider>
    </ThemeToastProvider>
    </IsLoadingProvider>
  );
};
