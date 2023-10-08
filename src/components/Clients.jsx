const Clients = () => {
    return (
        <div className="mt-16  ">
            <h1 className="text-5xl font-semibold text-center  text-gray-600 ">
                <span className="font-bold">What</span> Our Clients{" "}
                <span className="font-bold"> Say</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 w-11/12 mx-auto ">
                {/* card 1-------------------------- */}
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/n0Cvw9P/client1.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>
                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Olivia James
                    </h2>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            their wedding is a reflection of their whimsical
                            spirit. we re excited to bring their vision to life.
                            From creative and unique decor to a menu filled with
                            surprises, we re crafting an enchanting celebration
                            that mirrors their love for the extraordinary.
                        </p>
                    </div>
                </div>
                {/* card 1-------------------------- */}
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/30VgkH9/client2.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>

                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Kenerds Dreamy
                    </h2>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            Their wedding is a celebration of romance and
                            devotion, and we are dedicated to making every
                            moment magical. From enchanting floral arrangements
                            to the soothing melodies of live music, we are
                            crafting an experience that mirrors the depth of
                            their love.
                        </p>
                    </div>
                </div>
                {/* card 1-------------------------- */}
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/zh1t6Y2/client3.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>
                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Emma Benjamin
                    </h2>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            {" "}
                            Their wedding is a testament to timeless love, and
                            we re here to make it unforgettable. With attention
                            to every detail, from elegant decor to delectable
                            cuisine, we re crafting a celebration that captures
                            their unique style. Join us in creating a day filled
                            with classic elegance and unforgettable moments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
