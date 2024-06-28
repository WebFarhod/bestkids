import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import "./main.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./components/index.ts";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./service/query/queryClient.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <App />
          <ToastContainer />
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  </HelmetProvider>
);
