import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AppLayout from "./components/AppLayOut";
import ProductDetails from "./components/ProductDetails";

function AppRouter() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default AppRouter;
