import Head from 'next/head'
import Image from "next/image"

import Hero from '../components/home/hero'
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Resume from "../components/home/Resume";
import Team from "../components/home/Tram";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import Partners from "../components/home/Partners";
import Blogs from "../components/home/Blogs";
import Faq from "../components/home/Faq";
import Contact from "../components/home/Contact";
import Map from "../components/home/Map";
import News from "../components/home/News";
import Meta from "../components/layouts/Meta";


export default function Home() {
    return (
        <div>
            <Head>
                <title>وب سایت تیم طراحی و توسعه کسب و کار نیاسا</title>
                <Meta/>
            </Head>
            <div>
                <Hero/>
                <Services/>
                <Features/>
                <Resume/>
                <Team/>
                <Process/>
                <Testimonials/>
                <Partners/>
                <Blogs/>
                <Faq/>
                <Contact/>
                <Map/>
                <News/>
            </div>

        </div>
    )
}
