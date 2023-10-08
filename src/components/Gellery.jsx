/* eslint-disable no-unused-vars */
import React from "react";
import data from "../../public/Gallery.json";
import Footer from "./Footer";

const Gellery = () => {
    return (
        <div>
            <h1 className="text-5xl  font-serif mt-10 text-center text-blue-400">
                Our Photo Plans
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className=" w-96 bg-gray-100 rounded-md mt-10">
                        <figure>
                            <img
                                className="w-full h-[300px] rounded-md"
                                src={item.image}
                                alt="Shoes"
                            />
                        </figure>

                        <h1 className="flex justify-center text-xl font-bold">
                            {item.couple_name}
                        </h1>

                        <h1 className="flex justify-center">
                            #Form: {item.location}
                        </h1>
                    </div>
                ))}
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Gellery;
