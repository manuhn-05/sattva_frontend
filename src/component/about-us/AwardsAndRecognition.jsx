import React from 'react'
import { AWARDS_AND_RECOGNITION } from '../../data/data'

const AwardsAndRecognition = () => {
  return (
    <article className='min-h-[calc(100vh-200px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-[#0F172A]'>
      <section className={`container`}>
        <div className="text-left md:text-center">
          <h6 className="text-green-600 text-base font-medium uppercase mb-2">Awards and Recognition.</h6>
          {/* <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white"></h3> */}
        </div>

        <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {

            AWARDS_AND_RECOGNITION?.map((award) => {
              return (
                <div key={award.id} className={`bg-white p-[2%] dark:bg-[#0F172A] rounded-lg shadow 
                shadow-slate-200 dark:shadow-slate-800 overflow-hidden max-w-[350px] `}>
                  <div className='w-[90%] mx-auto mt-[5%]'>
                    <img src={award.imageSrc} alt={award.heading} />
                  </div>
                  <div className='mt-[7%] w-[90%] mx-auto '>
                    <h4 className='text-[1.2rem] font-bold dark:text-white my-[2%]'>{award.heading}  </h4>
                    <p className='text-[1rem] font-light text-gray-400 dark:text-white'>{award.description}</p>




                  </div>
                </div>
              )
            })
          }
        </section>


      </section>
    </article>
  )
}

export default AwardsAndRecognition