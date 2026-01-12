import React from 'react'
import { motion } from "framer-motion";
import SattvaBannerDeskop from "../assets/images/home-page/banner-desktop.png";
import SattvaBannerMobile from "../assets/images/home-page/banner-phone.png";



const StartYourFreeTrial = () => {
    return (
        <article className={`md:py-24 py-16`} id={'start-your-trial'}>
            

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="lg:ms-7">
                            <h6 className="text-green-600 text-base font-medium uppercase mb-2">Welcome to SATTVA</h6>
                            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Your Comprehensive ESG Management Solution!</h3>
                            <motion.div
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.3,
                                        },
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5, }}
                            >
                                Welcome to SATTVA - Your Gateway to Sustainable Excellence. Embrace a new era of Environmental,
                                Social, and Governance (ESG) management with our cutting-edge SaaS solution.
                                SATTVA empowers organizations worldwide to take charge of their sustainability journey,
                                enabling seamless monitoring and effective management of ESG standards with unparalleled precision and insight.

                            </motion.div>

                            <div className="subcribe-form mt-6">
                                <form className="relative">
                                    <input type="email" name="email" className="form-input rounded-full bg-gray-100 border" placeholder="Enter your E-mail ID:" />
                                    <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Get a demo <i className="uil uil-arrow-right"></i></button>
                                </form>
                            </div>
                            {/* <div className="relative mt-10">
                  <a href="#portfolio" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md">View Portfolio</a>
                </div> */}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="relative">
                            <img src={SattvaBannerDeskop} className="rounded-lg relative" alt="" />
                            <img src={SattvaBannerMobile} className="rounded-lg md:h-[35vh] absolute top-[67.5%] left-[8%] -translate-x-1/2 -translate-y-1/2" alt="" />

                        </div>
                    </div>
                    {/* end col */}


                </div>
            </div>
        </article>
    )
}

export default StartYourFreeTrial