import React from "react";
import ReactDOM from "react-dom/client";

import Mainlayout from "./components/Mainlayout";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/security/Login";
import Registration from "./components/security/Registration";
import Gellery from "./components/Gellery";

import ServiceDetails from "./components/ServiceDetails";
import Boked from "./components/Boked";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
            },
            {
                path: "/Registration",
                element: <Registration></Registration>,
            },
            {
                path: "/Gallery",
                element: <Gellery></Gellery>,
            },
            {
                path: "/Boked",
                element: <Boked></Boked>,
            },

            {
                path: "/Service/:serviceId",
                element: <ServiceDetails></ServiceDetails>,
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
