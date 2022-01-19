import React from "react";

function AboutComponent() {
    return (
        <section className="flex justify-center text-center items-center flex-col mt-5">
            <h1 className="text-3xl font-bold text-inherit">Noderrz Panel</h1>
            <br></br>
            <span></span>
            <span></span>
            <span></span>
            <p>
                {" "}
                Noderrz is a open source <strong>Node.js</strong> control panel
                to run and manage servers very easy.
            </p>
            <span></span>
            <span></span>
            <span></span>
            <br></br>
            <img
                src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png"
                alt=""
                className="max-w-sm"
            />
        </section>
    );
}

export default AboutComponent;
