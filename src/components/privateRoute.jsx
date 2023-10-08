/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom"; // Import the Navigate component
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate to="/Login" />; // Use <Navigate> to redirect to the login page
};

export default PrivateRoute; // Use "PrivateRoute" with a capital "P" for consistency
