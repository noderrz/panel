import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
    return (
        <div className="bg-gray-800 text-center justify-center items-center min-h-screen flex flex-col">
            <h3 className="text-gray-200 mb-2">
                Sorry but the page you are looking for does not exist.
            </h3>
            <Link href="/">
                <a className="px-3 py-2 bg-neutral-300 text-sm rounded hover:bg-neutral-100 shadow-lg focus:ring">
                    Return Home
                </a>
            </Link>
        </div>
    );
};

export default NotFound;