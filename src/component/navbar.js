import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/sattva-logo.png";
import LogoDark from "../assets/images/sattva-logo.png";

export default function Navbar({ navdark }) {
  const [isOpen, setMenu] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener('scroll', windowScroll)
    }

  }, [])

  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }
  console.log(navdark);
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container flex flex-wrap items-center justify-end">
          {navdark && (

            <Link2 className="navbar-brand" to="/">
              <span>
                <img src={LogoDark} className="inline-block dark:hidden w-100 h-10" alt="" />
                <img src={LogoLight} className="hidden dark:inline-block w-100 h-10" alt="" />
              </span>
            </Link2>
          )}
          {!navdark && (

            <Link2 className="navbar-brand" to="/">
              <span className="inline-block dark:hidden">
                <img src={LogoDark} className="l-dark  w-100 h-10" alt="" />
                <img src={LogoLight} className="l-light w-100 h-10" alt="" />
              </span>
              <img
                src={LogoLight}
                className="hidden dark:inline-block w-100 h-10"
                alt=""
              />
            </Link2>
          )}

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
            {navdark && (
              <ul className="list-none menu-social mb-0">
                <li className="inline ms-1">
                  <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                    <i className="uil uil-github"></i>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                    <i className="uil uil-twitter"></i>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                    <i className="uil uil-instagram"></i>
                  </Link2>
                </li>
              </ul>
            )}
            {!navdark && (
              <ul className="list-none menu-social mb-0">
                <li className="inline ms-1">
                  <Link2 to="#">
                    <span className="login-btn-primary">
                      <span className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                        <i className="uil uil-github"></i>
                      </span>
                    </span>
                    <span className="login-btn-light">
                      <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                        <i className="uil uil-github"></i>
                      </span>
                    </span>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2 to="#">
                    <span className="login-btn-primary">
                      <span className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                        <i className="uil uil-twitter"></i>
                      </span>
                    </span>
                    <span className="login-btn-light">
                      <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                        <i className="uil uil-twitter"></i>
                      </span>
                    </span>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2 to="#">
                    <span className="login-btn-primary">
                      <span className="btn btn-sm btn-icon rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white">
                        <i className="uil uil-instagram"></i>
                      </span>
                    </span>
                    <span className="login-btn-light">
                      <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                        <i className="uil uil-instagram"></i>
                      </span>
                    </span>
                  </Link2>
                </li>
              </ul>
            )}
            <button
              type="button"
              className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu mdi-24px"></i>
            </button>
          </div>

          <div
            className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
            id="menu-collapse"
          >
            <ul className={`navbar-nav ${navdark ? '' : 'nav-light'}`} id="navbar-navlist">
              <Link2
                className="nav-item"
                to="/"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Home</span>
              </Link2>
              <Link2
                className="nav-item"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
                to="/about"
              >
                <span className="nav-link">About us</span>
              </Link2>
              <Link2
                className="nav-item"
                to="features"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Learning & insights</span>
              </Link2>
              <Link2
                className="nav-item"
                to="portfolio"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Products</span>
              </Link2>
              <Link2
                className="nav-item"
                to="testi"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Our Team</span>
              </Link2>
              <Link2
                className="nav-item"
                to="pricing"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="nav-link text-white rounded-lg transition bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-1 m-2 text-center inline-flex items-center dark:focus:ring-primary/55">Login</button>
              </Link2>
              <Link2
                className="nav-item"
                to="blog"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="nav-link text-white rounded-lg transition bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-1 m-2 text-center inline-flex items-center dark:focus:ring-primary/55">Get started</button>
              </Link2>
              {/* <Link2
                className="nav-item"
                to="contact"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Contact us</span>
              </Link2> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}   