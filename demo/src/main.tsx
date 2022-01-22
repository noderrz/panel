import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/auth/login";
import Servers from "./pages/dashboard/servers";
import Server from "./pages/dashboard/server";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/servers/:id" element={<Server />} />
                <Route path="/servers" element={<Servers />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
