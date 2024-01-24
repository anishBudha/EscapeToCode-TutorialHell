import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// importing pages: home, products and product
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products.jsx";

// importing navbar and footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//importing sass file
import "./App.scss";

// for navbar - outlet(which will render our pages) - footer
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
