const WeddingPlan = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-5xl font-serif flex justify-center mt-10 text-gray-500">
                Wedding Plans
            </h1>
            <p className="text-xl flex justify-center">
                {" "}
                We Provide the venue for the most amazing wedding reception
            </p>

            <div className=" grid grid-cols-1 lg:grid-cols-3  mt-5">
                <img
                    className="w-[330px] h-[330px]"
                    src="https://i.ibb.co/Lk427Qn/w1.jpg"
                    alt=""
                />
                <img
                    className="w-[330px] h-[330px]"
                    src="https://i.ibb.co/pQx2PBk/w2.jpg"
                    alt=""
                />
                <img
                    className="w-[330px] h-[330px]"
                    src="https://i.ibb.co/hWpwd9Y/w6.jpg"
                    alt=""
                />
                <img
                    className="w-[330px] h-[330px] mt-10"
                    src="https://i.ibb.co/MkH388z/w5.jpg"
                    alt=""
                />
                <img
                    className="w-[330px] h-[330px] mt-10"
                    src="https://i.ibb.co/Rzz0wh7/w4.jpg"
                    alt=""
                />
                <img
                    className="w-[330px] h-[330px] mt-10"
                    src="https://i.ibb.co/58Pzf2L/w3.jpg"
                    alt=""
                />
            </div>

            <div className="bg-gray-200 w-[1150px] mx-auto rounded-md h-[600px] mt-10">
                <div className="mt-5">
                    <h2 className="text-5xl font-semibold  flex justify-center mt-5 text-blue-400">
                        Sophia & Kenerd
                    </h2>
                    <hr />
                    <p className="text-xl  flex justify-center">
                        Sophia & Kenerd s Joyous Union: A Celebration of Love
                    </p>
                    <div className="flex gap-2 justify-center mt-10 ">
                        <figure>
                            <img
                                className="h-[400px] w-[300px] rounded-md "
                                src="https://i.ibb.co/XkbycRs/cuple1.jpg"
                                alt=""
                            />
                        </figure>
                        <figure>
                            <img
                                className="h-[400px] w-[300px] rounded-md"
                                src="https://i.ibb.co/nnKWFv1/cuple2.jpg"
                                alt=""
                            />
                        </figure>
                        <figure>
                            <img
                                className="h-[400px] w-[300px] rounded-md"
                                src="https://i.ibb.co/9mx6mWM/cuple3.jpg"
                                alt=""
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlan;
