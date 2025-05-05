import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
