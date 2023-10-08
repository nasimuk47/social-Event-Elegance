import React, { useEffect, useState } from "react";

const Boked = () => {
    const [bokedServices, setBokedServices] = useState([]);

    useEffect(() => {
        const storedBokedServices = localStorage.getItem("bokedServices");
        if (storedBokedServices) {
            setBokedServices(JSON.parse(storedBokedServices));
        }
    }, []);

    const handleCancelBooking = (index) => {
        const updatedBokedServices = [...bokedServices];
        updatedBokedServices.splice(index, 1);

        localStorage.setItem(
            "bokedServices",
            JSON.stringify(updatedBokedServices)
        );

        setBokedServices(updatedBokedServices);
    };

    return (
        <div className=" ">
            <h2>Booked Services</h2>
            {bokedServices.length === 0 ? (
                <p>No services booked.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {bokedServices.map((service, index) => (
                        <div
                            key={index}
                            className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
                            <figure>
                                <img
                                    className="w-full h-64 p-2"
                                    src={service.image}
                                    alt={service.name}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() =>
                                            handleCancelBooking(index)
                                        }
                                        className="btn btn-primary">
                                        Cancel Booking
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Boked;
