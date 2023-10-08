/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from "../../assets/logo2.avif";
import UserProfileImage from "../../assets/user.png"; // Import the user profile image
import { AuthContext } from "../AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log("user logged Out Succesfully"))
            .catch((error) => console.error(error));
    };
    return (
        <div>
            <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] rounded-md h-20 border">
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
                    <div>
                        {user ? (
                            <>
                                <span>{user.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
                                    LogOut
                                </button>
                            </>
                        ) : (
                            <Link to="/Login">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded-md  ">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;
