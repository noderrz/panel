import React from "react";

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

function Server() {
    return (
        <>
            <h1 className="">Welcome to the panel dashboard!</h1>
        </>
    );
}

export default Server;
