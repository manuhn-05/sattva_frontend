import React from 'react';
import ESGManagementHero from './ESGManagementHero';
import AddScheduleCall from './AddScheduleCall';
import OurClientAndPartners from './OurClientAndPartners';
import Blog from '../Blog';
import StartYourESGJourney from './StartYourESGJourney';
import SattvaProductPage from './SattvaProductPage';

const ProductsComponent = () => {

  return (
    <div className="w-full text-[4vw] md:text-[2vw]">
      <ESGManagementHero />
      <AddScheduleCall />
      <OurClientAndPartners />
      <SattvaProductPage />
      <StartYourESGJourney />

      <div className='text-[0.425em] bg-gray-50 dark:bg-[#0F172A] '>
        <Blog text={''} h3Heading={'Academy Blogs from Learning & Insights'} card_bg={'dark:bg-slate-800 border'} />

      </div>
    </div>
  )
}

export default ProductsComponent;