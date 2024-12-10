import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./components/AppLayout";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AppLayout from "./components/AppLayOut";

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
      ],
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default AppRouter;
