import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen text-center flex flex-col justify-center items-center">
                <h1 className="text-gray-700 mb-2 font-mono">
                    We are currently working on a new demo!
                </h1>
                <p className="text-[10px] text-gray-800 font-light">
                    Please check back later.
                </p>
            </div>
        </>
    );
};

export default Home;
