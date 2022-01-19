import React from "react";
import AboutComponent from "./components/aboutComponent";
import BannerComponent from "./components/banner";
import Navbar from "./components/navbar";

function App() {
    return (
        <>
            <Navbar />

            <BannerComponent />

            <AboutComponent />
        </>
    );
}

export default App;
