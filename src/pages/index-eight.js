import React from "react";
// import { Link as Link2 } from "react-router-dom";
// import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";

import backgroundImage from "../assets/images/bg/bg4.png";
import About1 from "../assets/images/home-page/banner-desktop.png";
import About2 from "../assets/images/home-page/banner-phone.png";
import AmazonImage from '../assets/images/client/amazon.svg';
import GoogleImage from '../assets/images/client/google.svg';
import LenovoImage from '../assets/images/client/lenovo.svg';
import PaypalImage from '../assets/images/client/paypal.svg';
import ShopifyImage from '../assets/images/client/shopify.svg';
import SpotifyImage from '../assets/images/client/spotify.svg';

import Services from "../component/Services";
import About from "../component/About";
// import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
// import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
// import Switcher from "../component/Switcher";
// import Navbar from "../component/navbar";
import StartYourFreeTrial from "../component/StartYourFreeTrial";

/**
 * Index eight 
 */
export default function IndexEight() {

    const logos = [AmazonImage, GoogleImage, PaypalImage, LenovoImage, ShopifyImage, SpotifyImage];

    return (
        <>
            <div>
                {/* <Navbar navdark={true} /> */}
                <section
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className="py-36 md:h-screen h-auto items-center flex relative bg-bottom bg-cover active" id="home">
                    <div className="absolute inset-0 -z-1 bg-gradient-to-b from-green-600/20 dark:from-green-600/40 via-green-600/10 dark:via-green-600/20 to-transparent"></div>
                    <div className="container relative">
                        <div className="grid md:grid-cols-12 grid-cols-1 justify-center items-center gap-16">
                            <div className="lg:col-span-6 md:col-span-6 mt-2 md:mt-20">
                                <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-4 position-relative dark:text-white">Your all-in-one  <br /> ESG management platform.</h4>
                                <p className="text-slate-500 dark:text-white/70 mb-0 max-w-2xl text-lg">Enter a new phase of ESG management with SATTVA, a SaaS platform designed to help organizations manage ESG standards with clarity, consistency, and control.</p>
                                <div className="subcribe-form mt-6">
                                    <form className="relative">
                                        <input type="email" name="email" className="form-input rounded-full bg-white border" placeholder="Enter your E-mail ID:" />
                                        <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Book a demo <i className="uil uil-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="lg:col-span-6 md:col-span-6">
                                <div className="relative">
                                    <div className="relative flex justify-end">
                                        <motion.img
                                            src={About1}
                                            className="lg:w-[600px] w-[480px] rounded-xl"
                                            alt=""
                                            initial={{ opacity: 0, y: 50 }}   // start invisible & lower
                                            animate={{ opacity: 1, y: 0 }}     // animate to visible & original position
                                            transition={{ duration: 1, ease: "easeOut" }} // animation duration & easing
                                        />
                                        {/* Optional YouTube play button */}
                                    </div>
                                    <div className="absolute md:-start-10 start-0 -bottom-10">
                                        <motion.img
                                            src={About2}
                                            className="lg:w-[140px] w-[70px] dark:border-slate-900 rounded-xl"
                                            alt=""
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden w-full py-6">
                            {/* Wrapper with relative width */}
                            <div
                                className="flex space-x-8"
                                style={{
                                    animation: "scroll 20s linear infinite",
                                }}
                            >
                                {/* Duplicate logos for seamless scroll */}
                                {logos.concat(logos).map((logo, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                                    >
                                        <img src={logo} alt={`logo-${index}`} className="object-contain h-full" />
                                    </div>
                                ))}
                            </div>
                            {/* Inline CSS for animation */}
                            <style jsx>{`@keyframes scroll {0% {transform: translateX(0);}100% {transform: translateX(-50%);}}`}</style>
                        </div>

                    </div>
                </section>

                {/* About section */}
                <About />

                {/* Service section */}
                <Services />

                {/* Portfolio section */}
                <Portfolio />

                {/* Review section */}
                <Review />

                {/* Pricing section */}
                {/* <Pricing /> */}

                {/* Blog section */}
                <Blog />

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-green-600 text-base font-medium uppercase mb-2">Our Partners</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">We partner with industry leaders</h3>
                        {/* <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p> */}
                    </div>

                    <div className="overflow-hidden w-full py-6">
                        {/* Wrapper with relative width */}
                        <div
                            className="flex space-x-8"
                            style={{
                                animation: "scroll 20s linear infinite",
                            }}
                        >
                            {/* Duplicate logos for seamless scroll */}
                            {logos.concat(logos).map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                                >
                                    <img src={logo} alt={`logo-${index}`} className="object-contain h-full" />
                                </div>
                            ))}
                        </div>
                        {/* Inline CSS for animation */}
                        <style jsx>{`@keyframes scroll {0% {transform: translateX(0);}100% {transform: translateX(-50%);}}`}</style>
                    </div>
                </div>
                {/* Contact section */}
                <Contact />
                {/*  Start Your Free Trial Component */}
                <StartYourFreeTrial />


                {/* Footer section */}

                {/* Switcher section */}
                {/* <Switcher /> */}
            </div>

        </>
    );

}
