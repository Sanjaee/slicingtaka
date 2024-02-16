import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductDetail } from "./Pages/ProductDetail";
import { Home } from "./Pages/Home";
import { Invoices } from "./Pages/Invoices";
import { Giftskin } from "./Pages/Giftskin";
import Caculator from "./Pages/Caculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductDetail />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  {
    path: "/gift-skin",
    element: <Giftskin />,
  },
  {
    path: "/calculator",
    element: <Caculator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
