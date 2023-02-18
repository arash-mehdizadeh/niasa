import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../shared/Button";
import NavLink from "../shared/NavLink";
import { useRouter } from 'next/router'

const routes = [
    { path: "/", label: "خانه" },
    { path: "/pricing", label: "طراحی سایت" },
    { path: "/about-us", label: "درباره ما" },
    { path: "/contact-us", label: "تماس با ما" },
]


function Navbar() {

    // const [showMenu, setShowMenu] = React.useState(false);
    // const router = useRouter();
    return (
        <div className="mx-[6.25rem]">
            <nav id="navbar" className="flex mt-8 items-center justify-between">
                <div className=" flex  items-center">
                    <Image width='50' height='50' src="/assets/img/logo.png" className="w-[50px] h-[50px] lg:mr-5" alt="" />
                    <ul className="flex flex-row lg:mr-[48px]  font-bold lg:text-normal wsm:!hidden">
                        {
                            routes.map(({ label, path }) => (
                                <Link href={path} key={label}
                                    passHref>
                                    <NavLink path={path}>{label}</NavLink>
                                </Link>
                            ))
                        }

                    </ul>
                </div>
                <div className="basis-1/4 flex justify-end font-bold items-center text-center wsm:!hidden">
                    <a href="" className="lg:mr-[13px]  w-max btn-style-2  px-8">نمونه کارها</a>
                    <a href="" className="lg:mr-[13px] w-max  btn-style-1  px-8">شروع همکاری</a>
                </div>
            </nav>
        </div>


    )
}


export default Navbar;
