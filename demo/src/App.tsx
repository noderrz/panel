import React from "react";
import AboutComponent from "./components/aboutComponent";
import BannerComponent from "./components/banner";
import Navbar from "./components/navbar";
import RouterHandler from "./routerHandler";

function App() {
    return (
        <>
            <Navbar />

            <BannerComponent />

            <AboutComponent />

            <RouterHandler />
        </>
    );
}

export default App;
