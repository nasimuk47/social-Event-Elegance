import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <div className="card flex-shrink-0 w-full mx-auto mt-16 h-[480px] max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h1 className="font-serif ml-8 mb-2">Or Login With</h1>

                <div className="flex justify-center ">
                    <button className="btn bg-sky-400 mb-2 w-[200px]">
                        Log in With google
                    </button>
                </div>
                <h1 className="font-bold flex justify-center">
                    Don't have an account?
                </h1>

                <a
                    className="text-center mb-10 underline  text-blue-600 "
                    href="/Registration">
                    Register Now
                </a>
            </div>
        </div>
    );
};

export default Login;
