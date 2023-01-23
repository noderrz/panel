import React from "react";

function NavControls() {
    return (
        <>
            <nav className="flex bg-primaryButton text-white shadow-2xl h-16 items-center">
                <ul className="flex ml-4">
                    <li>
                        <a className="nav-control-button" href="#">
                            Console
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            File Manager
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Databases
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Users
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Backups
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Network
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Startup
                        </a>
                    </li>
                    <li>
                        <a className="nav-control-button" href="#">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavControls;
