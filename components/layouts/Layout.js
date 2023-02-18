import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0  " />

            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
