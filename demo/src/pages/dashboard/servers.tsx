import React from "react";
import Nav from "../../components/dashboard/nav";

const servers = [
    {
        id: 1,
        name: "Server 1",
        description: "This is a server",
        status: "online",
    },

    {
        id: 2,
        name: "Server 2",
        description: "This is a server",
        status: "offline",
    },
];

function Servers() {
    return (
        <div style={{ height: "100vh" }} className="bg-primary">
            <Nav />
            <br />
            <div>
                <div className="min-h-screen flex justify-center items-center">
                    <ul className="bg-white p-8 w-1/2 rounded">
                        {servers.map((server) => (
                            <li
                                key={server.id}
                                className="mb-4 bg-gray-800 hover:bg-gray-700 transition-all p-5 rounded-lg shadow-xl text-white"
                            >
                                <a
                                    href={`/servers/${server.id}`}
                                    title={server.description}
                                    className="block"
                                >
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-bold">
                                            <i className="fas fa-server mr-3"></i>{" "}
                                            {server.name}
                                        </h1>
                                        {server.status === "online" && (
                                            <h1 className="text-xl uppercase font-extrabold text-green-500">
                                                {server.status}
                                            </h1>
                                        )}
                                        {server.status === "offline" && (
                                            <h1 className="text-xl uppercase font-extrabold text-red-500">
                                                {server.status}
                                            </h1>
                                        )}
                                    </div>
                                </a>

                                {servers.length === 0 && (
                                    <p className="text-center text-xl font-extrabold text-white">
                                        No servers found
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servers;
