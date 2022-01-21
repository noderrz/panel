import React from "react";

function Login() {
    return (
        <section
            style={{ height: "100vh" }}
            className="bg-primary min-h-screen flex justify-center items-center md:py-32 md:px-16"
        >
            <form
                action="/servers"
                method="POST"
                encType="multipart/form-data"
                className="bg-white p-8 rounded shadow-xl w-1/2 "
            >
                <div className="mb-2">
                    <h1 className="text-3xl text-center font-['Poppins'] font-bold">
                        Login to Continue
                    </h1>
                </div>

                <div className="mt-6 items-center justify-center text-center">
                    <p className="text-center text-xl text-primaryGray font-extrabold">
                        Username or Email
                    </p>
                    <input
                        className="shadow-md appearance-none border-2 border-primaryBorder bg-primaryBorderBg rounded-xl w-1/2 py-2 px-3 text-gray-700 
                        leading-tight focus:ring-1 focus:outline-none focus:ring-primaryFocus focus:ring-primaryFocus focus:ring-primaryFocus transition-all mt-2"
                        id="username"
                        type="text"
                        placeholder="Enter username or email..."
                        required
                    />
                </div>
                <div className="mt-6 items-center justify-center text-center">
                    <p className="text-center text-xl text-primaryGray font-extrabold">
                        Password
                    </p>
                    <input
                        className="shadow-md appearance-none border-2 border-primaryBorder bg-primaryBorderBg rounded-xl w-1/2 py-2 px-3 text-gray-700 
                        leading-tight focus:ring-1 focus:outline-none focus:ring-primaryFocus focus:ring-primaryFocus focus:ring-primaryFocus transition-all mt-2"
                        id="username"
                        type="password"
                        placeholder="Enter your password..."
                        required
                    />
                </div>
                <div className="mt-6 items-center justify-center text-center">
                    <button
                        className="px-11 py-4 rounded shadow-xl bg-primaryButton hover:bg-primaryButtonHover transition-all font-extrabold text-white focus:ring-2"
                        type="submit"
                    >
                        <i className="fa fa-sign-in-alt mr-2"></i> Login
                    </button>
                </div>
                <div className="mt-6 items-center justify-center text-center">
                    <a href="/auth/forgot-password" className="underline">
                        Forgot password?
                    </a>
                </div>
            </form>
        </section>
    );
}

export default Login;
