import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((Result) => {
                console.log(Result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className=" mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="PhotoURL"
                                    className="input input-bordered"
                                    name="photo"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Register Now
                                </button>
                            </div>
                        </form>

                        <h1 className="font-serif ml-8 mb-2">
                            Or Register With
                        </h1>

                        <div className="flex justify-center ">
                            <button className="btn bg-sky-400 mb-2 w-[200px]">
                                Log in With google
                            </button>
                        </div>
                        <h1 className="font-bold flex justify-center">
                            Allready have an account?
                        </h1>
                        <a
                            className="text-center mb-10 underline  text-blue-600 "
                            href="/Login">
                            Login Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
