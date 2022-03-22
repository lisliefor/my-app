import React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

const Routers = () => {
  const routes = useRoutes([
    { path: "/products", element: <ProductList /> },
    { path: "/users", element: <UserList /> },
  ]);
  return routes;
};

export default Routers;
