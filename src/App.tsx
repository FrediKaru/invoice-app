import "./index.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";

// components
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </>
  );
}

function Fallback() {
  return <p>Performing intial data load.</p>;
}
