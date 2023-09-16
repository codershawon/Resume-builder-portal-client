import "./index.css";
import "./i18n"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";

import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
  </Suspense>
);