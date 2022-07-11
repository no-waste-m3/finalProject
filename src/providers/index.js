import { CartProvider } from "./Cart";
import { FormProvider } from "./Form";
import { IsLoadingProvider } from "./IsLoading";
import { ProductsProvider } from "./Products";
import { ThemeProvider } from "./Theme";
import { ThemeToastProvider } from "./ThemeToast";
import { UploadProvider } from "./Upload";


export const Providers = ({ children }) => {
  return (
    <IsLoadingProvider>
    <ThemeToastProvider>
      <FormProvider>
        <ProductsProvider>
          <ThemeProvider>
            <UploadProvider>
              <CartProvider>
                {children}
              </CartProvider>
              </UploadProvider>
          </ThemeProvider>
        </ProductsProvider>
      </FormProvider>
    </ThemeToastProvider>
    </IsLoadingProvider>
  );
};
