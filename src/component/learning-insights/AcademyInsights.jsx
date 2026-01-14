import React from 'react'
import { motion } from 'framer-motion';
import DigitalTools from "../../assets/images/academy-insights/academy-blog-1.webp"
import { ACADEMY_INSIGHTS_BLIGS } from '../../data/data';

const AcademyInsights = () => {
    return (
        <article className={`min-h-[calc(100vh-100px)] flex flex-col items-center p-4 py-28 md:py-32
        bg-gradient-to-b from-green-600/20 dark:from-green-600/40 via-green-600/10 dark:via-green-600/20 to-transparent`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}   // start invisible & lower
                    animate={{ opacity: 1, x: 0 }}     // animate to visible & original position
                    transition={{ duration: 1, ease: "easeOut" }} // animation duration & easing

                    className='flex flex-col items-center'>
                    <h3 className="text-green-600 text-[0.7em] lg:text-base font-medium uppercase mb-2">Learning & Insights</h3>
                    <h2>Discover our Resources</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}   // start invisible & lower
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className={`lg:text-[0.4em] text-center my-[3%]`}>
                    <h6 className='text-[0.7em] text-slate-500 dark:text-white/70 lg:text-[1.35em]'>Explore Blogs, News, Webinars and more from our ESG experts.</h6>
                </motion.div>

                <section>
                    <h3 className="text-green-600 text-[0.7em] lg:text-base font-medium uppercase mb-2">Academy</h3>
                    <div className='grid max-md:grid-cols-1 md:flex flex-col md:flex-col-reverse lg:grid lg:grid-cols-[1fr,2fr] gap-[2%] md:max-lg:gap-y-4'>
                        <div className='items-start flex flex-col w-full'>
                            <div className='w-full'>
                                <div className='bg-green-300/30 p-2 rounded-xl border-b md:text-[0.85em] lg:text-[0.5em]'>
                                    <i className="uil uil-search"></i>  <input className='bg-transparent outline-none' type="text" />
                                    <br />
                                    <span className='w-[95%] h-[1px] bg-green-600 block mx-auto' />
                                </div>
                            
                            </div>
                            <div className='gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[2%] my-[2%]'>
                                {ACADEMY_INSIGHTS_BLIGS?.map((blog) => (<div className=' border border-gray-300 rounded-xl overflow-hidden' key={blog.id}>
                                    <div className='w-full'>
                                        <img src={blog.imgSrc} alt={blog.title} />
                                    </div>
                                    <div className='w-full'>
                                        <h4 className='text-[0.45em] md:text-[0.95em] p-[1%] lg:text-[0.45em] lg:leading-6 font-medium mb-2'>{blog.title}</h4>
                                        <p className='text-[0.5em] md:text-[0.9em] lg:text-[0.45em] text-justify line-clamp-3 px-[1%] flex justify-evenly'>
                                            <span><i className="uil uil-calendar-alt"></i> {blog.updated}</span>
                                            <span><i className="uil uil-clock-eight"></i> {blog.timeToRead}</span>
                                        </p>
                                    </div>

                                </div>))}
                            </div>

                        </div>
                        <div className='border border-gray-300 shadow-xl rounded-xl'>
                            <h4 className='text-[0.7em] p-[1%] text-justify lg:text-[0.65em] lg:leading-8 font-medium mb-2'>The significance of digital tools and digitalization in enhancing
                                sustainability within the fashion industry,
                                particularly in the RMG sector.</h4>
                            <div className='border'>
                                <img src={DigitalTools} alt="The Significance of Digital Tools" />
                            </div>
                            <p className='text-[0.5em] md:text-[0.8em] lg:text-[0.5em] text-justify line-clamp-4 px-[1%]'>
                                In today's world, sustainability is not just a trend—it's a must. brands are seeking manufacturing partners who are serious about sustainability.
                                Digital tools can help meet these needs by providing advanced solutions for achieving environmental and social goals.
                                Here's how digitalization can lead the way in making apparel manufacturing more sustainable and socially responsible.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default AcademyInsights