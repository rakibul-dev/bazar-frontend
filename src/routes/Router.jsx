import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/CustomerPages/Home";
import ProductDetails from "../pages/CustomerPages/ProductDetails";
import CustomerLayout from "../layouts/CustomerLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);
export default Router;
