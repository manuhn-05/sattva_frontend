import React from 'react'
import { SATTVA_TRUSTED_COMPANIES } from '../../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import ESGJourneyCard from './ESGJourneyCard';

const ClientReviewCarousel = ({settings, className}) => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
  
  return (
    <div className={`${className}`}>
                <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings} className='flex gap-[2%]'
                    >
                        {
                            SATTVA_TRUSTED_COMPANIES?.map((item) => (
                                <ESGJourneyCard item={item} key={item?.id} />
                            ))
                        }


                    </Slider>

                </div>
                <div style={{ textAlign: "center" }} className='flex justify-start gap-[1.5%] mt-[3%]'>
                    {/* <p className='text-sm text-gray-500 dark:text-gray-400'>{`${sliderRef?.current?.slickCurrentSlide + 1} of ${sliderRef?.current?.slickSlideCount}`}</p> */}
                    <button className="button bg-white border border-gray-400 rounded-lg px-[1%]" onClick={previous} >
                        <i className="uil uil-angle-left text-[2em] font-thin" />
                    </button>
                    <button className="button bg-white border border-gray-400 rounded-lg px-[1%]" onClick={next} >
                        <i className="uil uil-angle-right text-[2em] font-thin" />
                    </button>
                </div>
            </div>
  )
}

export default ClientReviewCarousel