import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
    return (
        <div className="bg-gray-200 text-center justify-center items-center min-h-screen flex flex-col">
            <h3 className="text-gray-700 font-mono mb-2">
                Sorry but the page you are looking for does not exist.
            </h3>
            <Link href="/">
                <a className="px-3 py-2 bg-sky-500 text-gray-200 text-sm rounded hover:bg-sky-400 shadow-lg focus:ring">
                    Return Home
                </a>
            </Link>
        </div>
    );
};

export default NotFound;
