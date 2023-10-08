/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Clients from "../Clients";
import WeddingPlan from "../WeddingPlan";
import Footer from "../Footer";

const Home = () => {
    const backgroundImageUrl = "https://i.ibb.co/3Fpk33T/weaddig-banner.webp";

    const bannerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
    };

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                setCardsData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="mt-5">
            <div style={bannerStyle}>
                <div>
                    <h1 className="text-7xl flex justify-center">
                        WE ARE -<span className="text-blue-300"> BRIDE</span>
                    </h1>{" "}
                    <br />
                    <h2 className="text-5xl">Wedding Organizer Company.</h2>
                </div>
            </div>

            <h1 className="text-5xl font-serif flex justify-center mt-5 ">
                Our Service
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="card card-compact w-[360px] bg-base-100 shadow-xl mt-5">
                        <figure>
                            <img
                                className="w-full h-64 p-2 rounded-t-2xl"
                                src={card.image}
                                alt={card.title}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center">
                                {card.name}
                            </h2>
                            <h1 className="text-xl flex justify-center">{`Price:  ${card.price}`}</h1>
                            <p className="flex justify-center text-base">
                                {card.short_description}
                            </p>

                            <div className="card-actions justify-center">
                                <Link
                                    to={`/Service/${card.id}`}
                                    className="btn bg-gray-300">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <WeddingPlan></WeddingPlan>

            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;
