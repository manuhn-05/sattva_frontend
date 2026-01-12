import React from "react";
// import { Link as Link2 } from "react-router-dom";
import { motion } from "framer-motion";

import AboutImage from "../assets/images/home-page/sattva_mob.png";
// import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  // const [isOpen, setOpen] = useState(false)

  const paragraph = ["At SATTVA, we believe that sustainable success begins with responsible management of Environmental, Social, and Governance (ESG) standards. Our cutting-edge SaaS platform is meticulously designed to empower organizations of all sizes to embark on a transformative journey towards a greener, more socially responsible, and economically sustainable future.",
    "SATTVA is more than just an ERP system; it's a catalyst for change. We recognize the profound impact businesses have on the world around us. That's why SATTVA was born – to revolutionize the way companies approach ESG management. By leveraging technology, data intelligence, and strategic insights, we enable businesses to integrate sustainability seamlessly into their core operations, fostering a culture of purpose-driven success.",
    "SATTVA is tailored for forward-thinking organizations that prioritize sustainability, transparency, and ethical business practices. Whether you are a multinational corporation, a growing enterprise, or a socially conscious startup, SATTVA is your trusted partner on the journey to sustainable excellence. From environmental stewardship to social equity and corporate governance, our platform empowers companies from diverse industries to adhere to global ESG standards and align their operations with the United Nations' Sustainable Development Goals (SDGs)."
  ]

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={AboutImage} className="rounded-lg relative" alt="" />
                {/* <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link2 to="#" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-blue-600">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link2>
                </div> */}
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
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
                  {paragraph?.map((para, index) => (
                    <motion.p
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 1.2,     // ⬅ slower
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto my-4"
                    >
                      {para}
                    </motion.p>
                  ))}
                </motion.div>

                {/* <div className="relative mt-10">
                  <a href="#portfolio" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md">View Portfolio</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );

}

