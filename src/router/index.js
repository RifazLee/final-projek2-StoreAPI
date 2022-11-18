import ProtectedRoute from "../components/ProtectedRouter";
import Cart from "../pages/Cart";
import Details from "../pages/DetailsProduct";
import DetailsProduct from "../pages/DetailsProduct/detailProducts";
import Home from "../pages/Product";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import StockProduct from "../pagesadmin/ProductStock";
import Rekap from "../pagesadmin/RekapPenjualan";
import About from "../pages/About";
import Cv from "../pages/About/detailCv";

const Router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Details />,
      children: [
        {
          path: ":id",
          element: <DetailsProduct />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
      path: "/cart",
      element:
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>,
    },
    {
      path: "/admin/rekap",
      element: <Rekap />,
    },
    {
      path: "/admin/home",
      element: <StockProduct />,
    },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: ":itemId",
          element: <Cv />,
        },
      ],
    },
  ];
  
  export default Router;