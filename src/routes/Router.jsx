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
import ShopPage from "../pages/CustomerPages/ShopPage";
// Customer Dashboard
import CustomerDashboard from "../layouts/CustomerDashboard";
import CustomerOrdersPage from "../pages/CustomerPages/Dashboard/CustomerOrdersPage";
import CustomerWishlistPage from "../pages/CustomerPages/Dashboard/CustomerWishlistPage";
import CustomerProfilePage from "../pages/CustomerPages/Dashboard/CustomerProfilePage";
import CustomerAddressesPage from "../pages/CustomerPages/Dashboard/CustomerAddressesPage";

// Admin Pages
import AdminLayout from "../layouts/AdminLayout";
import AdminBrandsPage from "../pages/AdminPages/Brand/AdminBrandsPage";
import AdminCategoryPage from "../pages/AdminPages/Category/AdminCategoryPage";
import AdminCustomersPage from "../pages/AdminPages/Customers/AdminCustomersPage";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import AdminOrdersPage from "../pages/AdminPages/Orders/AdminOrdersPage";
import AdminProductsPage from "../pages/AdminPages/Products/AdminProductsPage";
import AdminRefundsPage from "../pages/AdminPages/Refunds/AdminRefundsPage";
import AdminSellersPage from "../pages/AdminPages/AdminSellersPage";
import AdminProductCreatePage from "../pages/AdminPages/Products/AdminProductCreatePage";
import AdminProductReview from "../pages/AdminPages/Products/AdminProductReview";
import AdminCategoryCreatePage from "../pages/AdminPages/Category/AdminCategoryCreatePage";
import AdminBrandCreatePage from "../pages/AdminPages/Brand/AdminBrandCreatePage";
import AdminOrderDetailsPage from "../pages/AdminPages/Orders/AdminOrderDetailsPage";

// Auth pages
import CustomerLoginPage from "../pages/AuthPages/CustomerLoginPage";
import CustomerRegisterPage from "../pages/AuthPages/CustomerRegisterPage";

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
      { path: "/shop", element: <ShopPage /> },
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
        path: "product/refund-request",
        element: <AdminRefundsPage />,
      },
      {
        path: "product/create",
        element: <AdminProductCreatePage />,
      },
      {
        path: "product/reviews",
        element: <AdminProductReview />,
      },
      {
        path: "category/create",
        element: <AdminCategoryCreatePage />,
      },
      {
        path: "order/create",
        element: <AdminCategoryCreatePage />,
      },
      {
        path: "order/:id",
        element: <AdminOrderDetailsPage />,
      },
      {
        path: "brand/create",
        element: <AdminBrandCreatePage />,
      },
      {
        path: "vendors",
        element: <AdminSellersPage />,
      },
    ],
  },
  //   Auth
  {
    path: "/customer/login",
    element: <CustomerLoginPage />,
  },
  {
    path: "/customer/register",
    element: <CustomerRegisterPage />,
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
