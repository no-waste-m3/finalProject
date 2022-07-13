import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { IsLoadingProvider } from "./IsLoading";
import { MapsProvider } from "./Maps";
import { ProductsProvider } from "./Products";
import { ProductsFiltersProvider } from "./ProductsFilters";
import { SalesProvider } from "./Sales";
import { StoresProvider } from "./Stores";
import { ThemeProvider } from "./Theme";
import { ThemeToastProvider } from "./ThemeToast";
import { UploadProvider } from "./Upload";

export const Providers = ({ children }) => {
  return (
    <IsLoadingProvider>
    <ThemeToastProvider>
      <FormProvider>
        <MapsProvider>
          <StoresProvider>
        <ProductsProvider>
          <ProductsFiltersProvider>
          <ThemeProvider>
            <UploadProvider>
              <CartProvider>
                <SalesProvider>
                  {children}
                </SalesProvider>
              </CartProvider>
              </UploadProvider>
          </ThemeProvider>
          </ProductsFiltersProvider>
        </ProductsProvider>
        </StoresProvider>
        </MapsProvider>
      </FormProvider>
    </ThemeToastProvider>
    </IsLoadingProvider>
  );
};
