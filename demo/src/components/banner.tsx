import React from "react";

function BannerComponent() {
    return (
        <main className="flex justify-center text-center flex-col bg-indigo-500 h-52 shadow-lg">
            <h1 className="text-white font-bold text-3xl">
                Noderrz Control Panel
            </h1>
            <div className="mt-5">
                <button className="py-3 px-4 bg-zinc-600 rounded font-bold font-mono text-white text-sm shadow-xl hover:bg-zinc-700 transition-all focus:ring-2  focus:ring-zinc-700">
                    Let's Go start!
                </button>
            </div>
        </main>
    );
}

export default BannerComponent;
