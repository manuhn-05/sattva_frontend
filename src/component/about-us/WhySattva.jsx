import { motion } from "framer-motion";
import WhySattvaLogo from "../../assets/images/about/why-sattva.webp";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/bg/bg4.png";


const WhySattva = () => {
    return (
        <main
            style={{backgroundImage: `url(${backgroundImage})`}}
            className="py-36 h-auto  md:h-screen items-center flex relative bg-bottom bg-cover active" id="about-us"
        >
            <div className="absolute inset-0 -z-1 bg-gradient-to-b from-green-600/20 dark:from-green-600/40 via-green-600/10 dark:via-green-600/20 to-transparent"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 justify-center items-center gap-16">
                    <div className="lg:col-span-6 md:col-span-6 mt-2 md:mt-20">
                        <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-4 position-relative dark:text-white">Why Sattva?</h4>
                        <p className="text-slate-500 dark:text-white/70 mb-0 max-w-2xl text-lg">Sattva- Safe and Sustainable,  is an all-in-one ESG management tool designed to simplify how organizations collect, manage, and report ESG data. It helps businesses track ESG performance, manage risks, and align with global frameworks through a single,
                            easy-to-use platform.</p>
                        <p className="text-slate-500 dark:text-white/70 mb-0 max-w-2xl text-lg my-[1.5%]">
                            With Sattva, ESG becomes structured, transparent, and actionable—enabling confident compliance and sustainable growth.
                        </p>
                        <div className="subcribe-form mt-6">
                            {/* Todo : Replace the actual route link */}
                            <Link to="/about">

                                <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Get in Touch <i className="uil uil-arrow-right"></i></button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-6 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <motion.img
                                    src={WhySattvaLogo}
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
                                    src={WhySattvaLogo}
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
         

            </div>
        </main>
    )
}

export default WhySattva;