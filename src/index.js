import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
    <BrowserRouter>
        <App />
    </BrowserRouter>
=======
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
>>>>>>> 858ef2450ce18e3c1c06ada00e862fa593d9b593
);
