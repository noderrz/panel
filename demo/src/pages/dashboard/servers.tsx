import React from "react";

const servers = [
    {
        id: 1,
        name: "Server 1",
        description: "This is server 1",
        status: "online",
    },

    {
        id: 2,
        name: "Server 2",
        description: "This is server 2",
        status: "offline",
    },
];

function Servers() {
    return (
        <div>
            <h1>Servers</h1>
            <ul className="flex flex-col text-center justify-center items-center space-y-10 ">
                {servers.map((server) => (
                    <li>
                        <a
                            className="w-full px-3 py-3 bg-stone-700 text-white"
                            href={`/servers/${server.id}`}
                            title={server.description}
                            key={server.id}
                        >
                            {server.name}

                            {server.status === "online" && (
                                <span className="text-xs ml-5 uppercase font-bold text-green-500">
                                    {server.status}
                                </span>
                            )}
                            {server.status === "offline" && (
                                <span className="text-xs ml-5 uppercase font-bold text-red-500">
                                    {server.status}
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Servers;
