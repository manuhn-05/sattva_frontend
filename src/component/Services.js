import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import StrategyImage from "../assets/images/svg/design-thinking.svg";
import departmentImage from "../assets/images/svg/coding.svg";
import launchImage from "../assets/images/svg/office-desk.svg";


import AmazonImage from '../assets/images/client/amazon.svg';
import GoogleImage from '../assets/images/client/google.svg';
import LenovoImage from '../assets/images/client/lenovo.svg';
import PaypalImage from '../assets/images/client/paypal.svg';
import ShopifyImage from '../assets/images/client/shopify.svg';
import SpotifyImage from '../assets/images/client/spotify.svg';



export default function Services({isHeadingNeeded = true}) {
  const team = [
    {
      title: 'Sustainability Applications',
      icon: 'trees',
      subtext: 'SATTVA sustainability module help your company to report and track environmental performance indicators and align with Sustainable Development Goals.',
      points: ['Audit & Inspections', 'Sustainability', 'Environment', 'Chemical Management'],
    },
    {
      title: 'Health & Safety Applications',
      icon: 'shield-check',
      subtext: 'Sattva offers a complete set of modules that address different aspects of a safety programs and help organizations to improve their standards.',
      points: ['Hazard & Risk', 'Accident & Incident', 'Document Management', 'Equipment Management', 'Occupational Health'],
    },
    {
      title: 'Social Applications',
      icon: 'users-alt',
      subtext: 'This module will help the organization to drive a comprehensive employee retention strategy and track the employee grievances and get a actionable insight from employee surveys.',
      points: ['Grievance', 'Engagement', 'Attrition', 'Satisfaction Survey'],
    },
    // {
    //   title: 'Discussion For Idea',
    //   icon: 'shopping-basket',
    //   subtext: 'The phrasal sequence of the is now so that many campaign and benefit'
    // },
    // {
    //   title: 'Increase Conversion',
    //   icon: 'fire',
    //   subtext: 'The phrasal sequence of the is now so that many campaign and benefit'
    // },
    // {
    //   title: 'Sales Growth Idea',
    //   icon: 'circuit',
    //   subtext: 'The phrasal sequence of the is now so that many campaign and benefit'
    // }
  ]


  const logos = [AmazonImage, GoogleImage, PaypalImage, LenovoImage, ShopifyImage, SpotifyImage];

  return (

    <>
      {/* Start */}
      <section className="relative md:py-24 py-16 active" id="features">
        <div className="container lg mx-auto">
          {
            isHeadingNeeded && (
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
              <div>
                <h6 className="text-green-600 text-base font-medium uppercase mb-2">What We Do?</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Best Services for Your Business</h3>
              </div>
  
              <div>
                <p className="text-slate-500 dark:text-slate-300 max-w-xl">Enhance your company’s sustainability performance that provides automated reporting, management and deep analytics for ESG data.</p>
              </div>
            </div>
            )
          }
         

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">

            {team.map((item, key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                className="group p-6 mt-8 rounded-3xl border border-slate-200 dark:border-slate-700
               bg-white dark:bg-slate-900
               shadow-lg shadow-slate-100 dark:shadow-slate-800
               transition-all duration-500 hover:bg-primary"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center
                    bg-blue-600/10 text-blue-600
                    group-hover:bg-white group-hover:text-primary
                    transition-all duration-500">
                  <i className={`uil uil-${item.icon} text-3xl`}></i>
                </div>

                {/* Content */}
                <div className="content mt-6">
                  <Link
                    to="#"
                    className="text-lg font-semibold text-slate-800 dark:text-white
                   group-hover:text-white transition-colors duration-300"
                  >
                    {item.title}
                  </Link>

                  <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed
                    group-hover:text-white/90">
                    {item.subtext}
                  </p>

                  <h6 className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200
                     group-hover:text-white">
                    Includes:
                  </h6>

                  <ul className="mt-2 space-y-1">
                    {item?.points?.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-slate-600 dark:text-slate-300
                       group-hover:text-white/90 text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 group-hover:bg-white "></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-green-600 text-base font-medium uppercase mb-2">ESG Framework</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Corporate Reporting Customized for All Businesses</h3>
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

          {/* <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={StrategyImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Strategy</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Development</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <img src={departmentImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={launchImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Launch</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );

}
