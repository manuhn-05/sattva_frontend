import React from 'react'

import ProductParallox from './ProductParallax'

const SattvaProductPage = () => {
  return (
    <article className={`min-h-[calc(100vh-100px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-[#0F172A] `}>
      <div className="container">
      <div className="text-left md:text-center">
          <h6 className="text-green-600 text-base font-medium uppercase mb-2">Your Comprehensive ESG Management Solution!</h6>
          <h3 className="mb-4 text-[0.4em] md:text-[0.8em] lg:text-[0.5em] text-xl font-light text-slate-500 dark:text-white/70">Measure, manage, and report ESG performance with our certified platform and tailored guidance from leading sustainability experts.</h3>
          {/* <Link to="#" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md">Schedule a demo!</Link> */}
        </div>

      </div>
    <div className='md:text-[0.45em]'>
    {/* <Services isHeadingNeeded={false} /> */}
    <div className='lg:min-h-[500px] w-100vw lg:w-full overflow-hidden'>

      <ProductParallox />
    </div>
    </div>
    
   

    </article>
  )
}

export default SattvaProductPage