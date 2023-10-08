/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState(null);

    useEffect(() => {
        fetch(`/data.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const selectedService = data.find(
                    (item) => item.id === parseInt(serviceId)
                );
                setService(selectedService);
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
            });
    }, [serviceId]);

    const handleBokedClick = () => {
        if (service) {
            const storedBokedServices = localStorage.getItem("bokedServices");
            let updatedBokedServices = [];

            if (storedBokedServices) {
                updatedBokedServices = JSON.parse(storedBokedServices);
            }

            const isAlreadyBooked = updatedBokedServices.some(
                (bookedService) => bookedService.id === service.id
            );

            if (isAlreadyBooked) {
                // Show a warning toast
                toast.warning("Service is already booked.");
            } else {
                updatedBokedServices.push(service);

                localStorage.setItem(
                    "bokedServices",
                    JSON.stringify(updatedBokedServices)
                );

                toast.success("Service booked successfully!");
            }
        }
    };

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-5">
            <div className="card card-compact w-11/12 mx-auto bg-base-100 shadow-xl">
                <ToastContainer />
                <figure>
                    <img
                        className="w-full h-[500px]"
                        src={service.image}
                        alt={service.name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold flex justify-center">
                        {service.name}
                    </h2>
                    <h1 className="flex justify-center text-xl font-semibold">{`Price:  ${service.price}`}</h1>

                    <p className="flex justify-center text-base">
                        {service.Details_description}
                    </p>
                    <div className="card-actions justify-start">
                        <Link to="/">
                            <button className=" btn bg-gray-300 mt-5">
                                Go Home
                            </button>
                        </Link>
                    </div>
                    <div className="card-actions flex items-center justify-end">
                        <button
                            onClick={handleBokedClick}
                            className=" btn bg-sky-500">
                            booked
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
