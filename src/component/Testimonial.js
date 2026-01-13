import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CLIENT_REVIEW } from "../data/data";



export default function Review() {
   

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
                    {CLIENT_REVIEW.map((el) => (
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
