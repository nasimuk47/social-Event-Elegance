/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../../assets/logo2.avif";
import UserProfileImage from "../../assets/user.png"; // Import the user profile image

const Navber = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] bg-sky-50 rounded-md h-20 border">
                <h1>
                    <img src={Form} alt="" className="h-16" />
                </h1>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Gallery"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Boked"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Booking service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/About"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Login"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Registration"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Registration
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <img
                        src={UserProfileImage}
                        alt="User Profile"
                        className="h-10 rounded-full"
                    />
                    <NavLink to="/Login">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
                            Login
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;
