import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.error(error.message);

                if (error.code === "auth/wrong-password") {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed",
                        text: error,
                    });
                } else if (error.code === "auth/user-not-found") {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed",
                        text: error,
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed",
                        text: error,
                    });
                }
            });
    };

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: "Google Sign-In successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Google Sign-In failed",
                    text: error,
                });
            });
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
                    <button
                        onClick={handleGoogleSignin}
                        className="btn bg-sky-400 mb-2 w-[200px]">
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
