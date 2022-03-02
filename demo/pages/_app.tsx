import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import Navbar from "./components/Head/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Noderrz</title>
                <meta
                    name="description"
                    content="Node.js control panel to run and manage servers very easy
"
                />
                <meta name="theme-color" content="#72cb3e" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/noderrz.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/noderrz.png"
                />
            </Head>

            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
