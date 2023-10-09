/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from "../../assets/logo2.avif";
import { AuthContext } from "../AuthProvider";
import "./Navber.css";

const Navber = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log("user logged Out Successfully"))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] rounded-md h-20 ">
                <h1 className="logo">
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
                                to="/Boked"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                BookingService
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

                        <li className="login-registration-links">
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
                        <li className="login-registration-links">
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
                <div className="flex items-center user-info">
                    {user ? (
                        <>
                            <img
                                src={user.photoURL || "../../assets/user.png"} // Use the user's photoURL or a default image
                                alt="User Profile"
                                className="h-10 rounded-full "
                            />
                            <div>
                                <span className="user-email">{user.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link to="/Login">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navber;
