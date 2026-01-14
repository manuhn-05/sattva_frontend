import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhySattvaLogo from "../../assets/images/bg/laptop.png";

const StartYourESGJourney = () => {
  return (
    <article className={`min-h-[calc(100vh-100px)] flex flex-col items-center p-4 md:py-32 bg-white dark:bg-[#0F172A]`}>
      <div className="container relative bg-green-600/50 p-[3%] rounded-xl ">
        <div className="grid md:grid-cols-12 grid-cols-1 justify-center items-center gap-16">
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
          <div className="lg:col-span-6 md:col-span-6 mt-2 md:mt-20">
            <h4 className="text-[0.8em] lg:text-[0.8em] lg:leading-normal leading-normal font-medium mb-4 position-relative text-slate-500 dark:text-white/70">Start your ESG journey with SATTVA</h4>

            <p className="text-white/80 dark:text-white/50 mb-0 max-w-2xl text-[0.45em] lg:text-[0.6em] my-[1.5%]">
              Talk to our team to see how SATTVA simplifies ESG management across your organization.  </p>
            <ul className='list-disc md:text-[0.45em] lg:text-[0.55em] leading-8 text-white/80'>
              <li>
                Transition all your data from other systems to Plan A—done by our experts in weeks, not months.

              </li>
              <li>
                Rely on expert assistance for collecting, validating, and uploading data, ensuring sound and complete data.
              </li>
              <li>
                Stay on track with regular check-ins giving you guidance on calculation methods, data collection templates, and employee surveys.

              </li>
            </ul>
            <div className="subcribe-form mt-6">
              {/* Todo : Replace the actual route link */}
              <Link to="/about">

                <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">
                  Schedule a Call</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StartYourESGJourney;