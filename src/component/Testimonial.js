import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";

export default function Review() {
    const review = [
        {
            id: "1",
            profile: avatar1,
            name: "Mr.VS Shivkumar",
            title: "Much more easier now",
            designation: "Manager - Systems & Certifications at JVS, India",
            description:
                "Being the Management Representative of my Company, I have to frequently face audits in all our Factories. We have been using SATTVA™️, the ESG tool from REDEFINE for the last 18 months and I find that so much of our audit preparation work is taken care of by this tool. Also documentation and followup on corrective action is much more easier now.",
        },
        {
            id: "2",
            profile: avatar2,
            name: "Mr. Tony",
            title:
                "Experiencing better levels of safety and compliance in our factories it!",
            designation:
                "Managing Director at Bengal Hurricane Group, Bangladesh",
            description:
                "From the time that we have subscribed to SATTVA™ software of REDEFINE, we are experiencing better levels of safety and compliance in our factories. Earlier on we had to depend on many books, registers and xl sheets to capture data on EHS, but now with SATTVA™ all the paperwork has been eliminated and it is also easier for us to face audits as data is readily available. Due to this, the Safety, Environment and Compliance officers in our Factories can spend more time inside the factory and less time with documentation. SATTVA™ also generates automated reports and mails to key people in my Factory, thus keeping us all updated at all times.",
        },
        {
            id: "3",
            profile: avatar3,
            name: "Mr.Baiju Chellemma",
            title: "Adding value to work",
            designation:
                "General Manager at Jerash Garments and Fashion Manufacturing Co. Ltd, Jordan",
            description:
                "We have installed SATTVA™ the ESG software developed by REDEFINE. My Compliance Team and Safety Officers confirm that SATTVA™ software is adding value to their work by helping them capture relevant data pertaining to environment, safety and social aspects. SATTVA™ also automatically generates reports that I receive by mail, thus giving me constant updates on the performance of the EHS Team in my Factory and also the level of health and safety in my factory.",
        },
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 0 }, items: 1 },
    };

    return (
        <section
            className="relative md:py-24 py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900"
            id="testi"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="grid grid-cols-1 pb-12 text-center">
                    <h6 className="text-green-600 text-base font-medium uppercase mb-2 tracking-wide">
                        Testimonial
                    </h6>
                    <h3 className="mb-4 md:text-3xl text-2xl font-semibold dark:text-white">
                        What Our Clients Say
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We value our clients' feedback and are proud of the positive impact our solutions bring.
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    arrows={false}
                    draggable={true}
                    swipeable={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    pauseOnHover={true}
                >
                    {review.map((el) => (
                        <div
                            key={el.id}
                            className="m-4 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl rounded-2xl p-8 flex flex-col h-full transition-transform transform hover:-translate-y-1 duration-300"
                        >

                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={el.profile}
                                    alt={el.name}
                                    className="w-16 h-16 rounded-full border-2 border-orange-200 dark:border-orange-600 object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white">
                                        {el.name}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {el.designation}
                                    </p>
                                </div>
                            </div>

                            {/* Quote Icon */}
                            {/* <div className="text-5xl text-blue-500 dark:text-blue-800 select-none">“</div> */}

                            {/* Title */}
                            {el.title && (
                                <p className="font-medium text-slate-700 dark:text-slate-200 mb-3 text-lg">
                                    {el.title}
                                </p>
                            )}

                            {/* Full Description */}
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {el.description}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
