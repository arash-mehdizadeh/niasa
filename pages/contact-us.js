import Head from 'next/head'
import Image from "next/image"
import Contact from "../components/home/Contact";
import Meta from "../components/layouts/Meta";


export default function ContactUs() {
    return (
        <div>
            <Head>
                <title>تماس با ما</title>
                <Meta/>
            </Head>
            <div>
                <Contact/>
            </div>

        </div>
    )
}
