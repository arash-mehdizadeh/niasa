import React from "react"
import { useRouter } from "next/router";
import propTypes from "prop-types";
import Link from "next/link";

const NavLink = React.forwardRef(({ onClick, href, children, path }, ref) => {

    const router = useRouter();

    const className = () => {
        const defaultClassName = `
        
        flex flex-col items-center
        transition ease-in-out duration-300
          after:bg-transparent after:transition after:ease-in-out
        after:duration-300 hover:text-[#0f3fff] hover:after:bg-[#0f3fff] `;

        if(router.pathname !== path) {
            return defaultClassName;
        }


        return defaultClassName + ' text-[#0f3fff] after:bg-[#0f3fff]';
    }

    return (
        <li className="lg:mr-[41px]">
            <a
                href={href}
                onClick={onClick} ref={ref}
                className={className()}
            >
                { children }
            </a>
        </li>

    )
  })

NavLink.displayName = "NavLink"
NavLink.prototype = {
    path: propTypes.string.isRequired
}

export default NavLink;
