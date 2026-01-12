import React, { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { Link } from 'react-router-dom';

import Image1 from "../assets/images/portfolio/finance.jpg";
import Image2 from "../assets/images/portfolio/manufacturing.jpg";
import Image3 from "../assets/images/portfolio/automobile.jpg";
import Image4 from "../assets/images/portfolio/retail.jpg";
import Image5 from "../assets/images/portfolio/supply-chain.jpg";
import Image6 from "../assets/images/portfolio/6.jpg";
import Image7 from "../assets/images/portfolio/construction.jpg";
import Image8 from "../assets/images/portfolio/farming.jpg";

import CTABackground from "../assets/images/bg/cta.png";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
];

/**
 * Portfolio section
 */
export default function Portfolio() {

    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    const projectList = [
        {

            image: Image1,
            title: 'Financial Services & Insurance',
            subtext: 'Branding'
        },
        {
            image: Image2,
            title: 'Manufacturing',
            subtext: 'Designing'
        },
        {
            image: Image4,
            title: 'Retail',
            subtext: 'Books'
        },
        {
            image: Image3,
            title: 'Automobile',
            subtext: 'Abstract'
        },
        {
            image: Image5,
            title: 'Supply Chain & Logistics',
            subtext: 'V-card'
        },
        {
            image: Image6,
            title: 'Services Industries',
            subtext: 'Photography'
        },
        {
            image: Image7,
            title: 'Real Estate & Construction',
            subtext: 'Cups'
        },
        {
            image: Image8,
            title: 'Farming & Agriculture',
            subtext: 'Article'
        }
    ]
    return (
        <>
            {/* Project Start  */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active" id="portfolio">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-green-600 text-base font-medium uppercase mb-2">Industries We Support</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">One platform. Multiple industries.</h3>
                        <p className="text-slate-500 dark:text-slate-300 max-w-xl mx-auto">SATTVA is an all-in-one ESG management tool supporting businesses of all sizes. The platform delivers transparency, risk visibility, and alignment with global ESG standards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {/* {projectList.map((item, index) => (
                            <div className="relative rounded-md shadow-sm overflow-hidden group" key={index}>
                                <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="workimage" />
                                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                                <div className="content">
                                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                        <Link to="/portfolio-detail" onClick={() => handleCLick(index)} className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white btn-icon rounded-full lightbox">
                                            <i className="uil uil-camera"></i></Link>
                                    </div>
                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                        <Link to="/portfolio-detail" className="h6 text-md font-medium text-white hover:text-white-600 transition duration-500">{item.title}</Link>
                                        <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        {projectList.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-md shadow-sm overflow-hidden group"
                            >
                                <img
                                    src={item.image}
                                    alt="workimage"
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 z-0" />
                                <div className="absolute bottom-4 px-2 z-10">
                                    <h3 className="relative text-white text-md font-semibold transition-all duration-500 group-hover:-translate-y-2 group-hover:text-green-500">
                                        {item.title}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 text-green-500 transition-all duration-500 group-hover:w-full" />
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setOpen({ isOpen: false })}
                            onMovePrevRequest={() =>
                                setActiveIndex((photoIndex + images.length - 1) % images.length,
                                )
                            }
                            onMoveNextRequest={() =>
                                setActiveIndex((photoIndex + 1) % images.length,
                                )
                            }
                        />
                    )}
                </div>
            </section>
            {/* Project End  */}
            <section
                style={{ backgroundImage: `url(${CTABackground})` }}
                className="py-24 w-full table relative bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">Join the SATTVA Movement</h3>

                        <p className="text-white opacity-50 max-w-xl mx-auto">Embrace the SATTVA spirit and become part of a global community dedicated to making a positive impact. Whether you are driven by the pursuit of a greener environment, empowered communities, or responsible governance, SATTVA is your guiding force towards a brighter and more sustainable future.</p>

                        <div className="relative mt-10">
                            <Link to="#" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md">Schedule a demo!</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
