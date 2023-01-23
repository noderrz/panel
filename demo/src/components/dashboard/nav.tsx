import React from "react";

function Nav() {
    return (
        <nav className="flex items-center justify-between bg-primaryGray h-20 shadow-xl">
            <h1
                id="logo"
                className="ml-4 font-['Poppins'] font-semibold cursor-pointer text-3xl text-white"
            >
                Noderrz Demo
            </h1>
            <ul className="flex items-center text-gray-200 ">
                <li className="das-nav-btn">
                    <a title="Search..." id="search" href="/servers">
                        <i className="fas fa-search fa-xl"></i>
                    </a>
                </li>
                <li className="das-nav-btn">
                    <a title="View Servers" href="/servers">
                        <i className="fas fa-layer-group fa-xl"></i>
                    </a>
                </li>
                <li className="das-nav-btn">
                    <a title="View your account details" href="/servers">
                        <i className="fas fa-user fa-xl"></i>
                    </a>
                </li>
                <li className="das-nav-btn">
                    <a title="Signout..." href="/auth/logout">
                        <i className="fas fa-sign-out-alt fa-xl"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
