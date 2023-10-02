import { createBrowserRouter } from "react-router-dom";
// Error pages
import Error404 from "../pages/ErrorPages/Error404";
import ErrorLayout from "../layouts/ErrorLayout";

// Customer pages
import Home from "../pages/CustomerPages/Home";
import ProductDetails from "../pages/CustomerPages/ProductDetails";
import CustomerLayout from "../layouts/CustomerLayout";
import CartPage from "../pages/CustomerPages/CartPage";
import CheckOutPage from "../pages/CustomerPages/CheckOutPage";
import PaymentPage from "../pages/CustomerPages/PaymentPage";
// Customer Dashboard
import CustomerDashboard from "../layouts/CustomerDashboard";
import CustomerOrdersPage from "../pages/CustomerPages/Dashboard/CustomerOrdersPage";
import CustomerWishlistPage from "../pages/CustomerPages/Dashboard/CustomerWishlistPage";
import CustomerProfilePage from "../pages/CustomerPages/Dashboard/CustomerProfilePage";
import CustomerAddressesPage from "../pages/CustomerPages/Dashboard/CustomerAddressesPage";

// Admin Pages
import AdminLayout from "../layouts/AdminLayout";
import AdminBrandsPage from "../pages/AdminPages/AdminBrandsPage";
import AdminCategoryPage from "../pages/AdminPages/AdminCategoryPage";
import AdminCustomersPage from "../pages/AdminPages/AdminCustomersPage";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import AdminOrdersPage from "../pages/AdminPages/AdminOrdersPage";
import AdminProductsPage from "../pages/AdminPages/AdminProductsPage";
import AdminRefundsPage from "../pages/AdminPages/AdminRefundsPage";
import AdminSellersPage from "../pages/AdminPages/AdminSellersPage";

const Router = createBrowserRouter([
  // Customer
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/payment", element: <PaymentPage /> },
    ],
  },
  //   Customer Dashboard
  {
    path: "/customer",
    element: <CustomerDashboard />,
    children: [
      {
        path: "orders",
        element: <CustomerOrdersPage />,
      },
      { path: "wishlist", element: <CustomerWishlistPage /> },
      { path: "profile", element: <CustomerProfilePage /> },
      { path: "address", element: <CustomerAddressesPage /> },
    ],
  },
  //   Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "brands",
        element: <AdminBrandsPage />,
      },
      {
        path: "product/categories",
        element: <AdminCategoryPage />,
      },
      {
        path: "customers",
        element: <AdminCustomersPage />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "orders",
        element: <AdminOrdersPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "refunds",
        element: <AdminRefundsPage />,
      },
      {
        path: "vendors",
        element: <AdminSellersPage />,
      },
    ],
  },
  //   Errors pages
  {
    path: "*",
    element: <ErrorLayout />,
    children: [
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);
export default Router;
