import React from 'react';
import AboutDesktop from "../../assets/images/home-page/banner-desktop.png"

const ExploreSattva = () => {
    return (
        <article className='md:min-h-[calc(100vh-200px)] flex flex-col items-center p-4 md:py-32 dark:bg-[#0F172A]'>
            <section className={`bg-[#3BAA5D] text-white lg:w-[65%] flex h-[40vh] md:h-[calc(100vh-200px)] items-center justify-center px-4 rounded-lg `}>
                <div className="text-left md:text-center w-full">
                    <h3 className="mb-4 text-[1em] md:text-2xl  font-medium dark:text-white">Explore how Sattva enables your path to sustainable growth</h3>

                    <button type="button" className="btn max-md:text-[0.8em] bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Book a demo <i className="uil uil-arrow-right"></i></button>
                </div>

                <div className="w-full" >
                    <img src={AboutDesktop} alt="" />
                </div>
            </section>
        </article>
    )
}

export default ExploreSattva