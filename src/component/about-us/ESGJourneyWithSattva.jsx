import React from 'react'
import ClientReviewCarousel from './ClientReviewCarousel';
import useMediaQuery from "../../hooks/useMediaQuery";



const ESGJourneyWithSattva = () => {
    const styles = `flex flex-col justify-between lg:w-[90vw]`;
    const mobStyles = `flex flex-col justify-between w-[95vw]`;

    const isDesktop = useMediaQuery("(min-width: 1024px)");

    const desktopSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
    };
    const mobileSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    return (
        <section className='min-h-[calc(100vh-200px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-slate-800'>
            <div className="text-left md:text-center">
                <h6 className="text-green-600 text-base font-medium uppercase mb-2">Chosen by Industry Leaders</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Trusted by companies to simplify and strengthen their ESG journey with Sattva.</h3>
            </div>


            <div className="">

                {isDesktop ? (
                    <ClientReviewCarousel settings={desktopSettings} className={styles} />
                ) : (
                    <ClientReviewCarousel settings={mobileSettings} className={mobStyles} />
                )}
            </div>

        </section>
    )
}

export default ESGJourneyWithSattva;