import React from "react";

import AuthRequired from "./layouts/Auth/AuthRequired";
import { Contract, ProductList, Document, Dashboard, Home, ProductDetail, Order, Verify, Setting, Notification, ContractDetail, OrderDetails, Chat } from "./pages";

const routes = [
  {
    path: "/",
    element: <AuthRequired />,
    children: [
<<<<<<< HEAD:FE/src/routers.js
      { path: "", element: <Home />, breadcrumb: "Home" },
=======
      { path: "/", element: <Dashboard />, breadcrumb: "Dashboard" },
>>>>>>> 50aaeb73b537a7627bc4614f239109d8edfe0c7b:src/routers.js
      { path: "/dashboard", element: <Dashboard />, breadcrumb: "Dashboard" },
      { path: "/document", element: <Document />, breadcrumb: "Document" },
      { path: "/chat", element: <Chat/>, breadcrumb: "Chat"},
      {
        path: "/product-list",
        element: <ProductList />,
        breadcrumb: "Product Listings"
      },
      {
        path: "/product-list/detail",
        element: <ProductDetail />,
        breadcrumb: "Product Detail"
      },
      {
        path: "/contract-bidding",
        element: <Contract />,
        breadcrumb: "Contract Bidding"
      },
       {
        path: "/contract-bidding/detail",
        element: <ContractDetail />,
        breadcrumb: "Contract Details"
      },
      {
        path: "/order-management",
        element: <Order />,
        breadcrumb: "Order Management"
      },

      {
        path: "/order-management/order-details",
        element: <OrderDetails />,
        breadcrumb: "Order Details"
      },
      // {
      //   path: "/order-management/order-details/specific-chat",
      //   element: <Chat />,
      //   breadcrumb: "Order-Specific Chat"
      // },
      {
        path: "/KYC-verification",
        element: <Verify />,
        breadcrumb: "KYC Verification"
      },
      {
        path: "/settings",
        element: <Setting />,
        breadcrumb: "Settings"
      },
      {
        path: "/notifications",
        element: <Notification />,
        breadcrumb: "Notifications"
      },
    ]
  }
];

export default routes;
