import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import Link from "next/link";
import React from "react";
// components

const pages = [
  {
    href: "#Home",
    name: "Home",
  },
  {
    href: "#Services",
    name: "Services",
  },
  {
    href: "#buildingcertification",
    name: "Building Certification",
  },
  {
    href: "/zeronetenergy",
    name: "Zero Net Energy",
  },
  {
    href: "/aboutus",
    name: "About Us",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Griffin EnerG Consulting
              </a>
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {pages.map((page, i) => (
                <li key={i}>
                  <Link href={page.href}>
                    <a
                      className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                      href="#pablo"
                    >
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/griffin-energ-consulting/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
