import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
