/* eslint-disable no-unused-vars */
import React from "react";
import Navber from "./Header/navber";

import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;
