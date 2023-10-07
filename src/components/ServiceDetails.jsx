import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
            <img
                className="w-full h-64 p-2 rounded-t-2xl"
                src={service.image}
                alt={service.name}
            />
            <h1 className="text-xl">{`Price:  ${service.price}`}</h1>
            <p className="text-base mb-4">{service.short_description}</p>
        </div>
    );
};

export default ServiceDetail;
