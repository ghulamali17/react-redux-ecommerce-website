import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayOut";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";


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
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUP />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default AppRouter;
