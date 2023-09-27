import { createBrowserRouter } from "react-router-dom";

// Customer pages
import Home from "../pages/CustomerPages/Home";
import ProductDetails from "../pages/CustomerPages/ProductDetails";
import CustomerLayout from "../layouts/CustomerLayout";
import CartPage from "../pages/CustomerPages/CartPage";
import CheckOutPage from "../pages/CustomerPages/CheckOutPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
    ],
  },
]);
export default Router;
