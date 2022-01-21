import React from "react";
import AboutComponent from "../components/aboutComponent";
import BannerComponent from "../components/banner";
import Navbar from "../components/navbar";

function Home() {
    return (
        <>
            <Navbar />

            <AboutComponent />

            <BannerComponent />
        </>
    );
}

export default Home;
