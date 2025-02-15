import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProductListPage from "./Pages/ProductList.jsx";
import ProductDetailPage from "./Pages/ProductDetail.jsx";
import DefaultLayout from "./Components/Layouts/DefaultLayout.jsx";
import SummaryPage from "./Pages/SummaryPage.jsx";
import { CartProvider } from "./Components/contexts/CartContext.jsx";
import { CategoryProvider } from "./Components/contexts/CategoryContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <ProductListPage />,
        children: [
          {
            path: "/products/:category",
            element: <ProductListPage />,
          },
          {
            path: "/products/:category/:subCategory",
            element: <ProductListPage />,
          },
        ],
      },
      {
        path: "/product/:permalink",
        element: <ProductDetailPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CategoryProvider>
  </StrictMode>
);
