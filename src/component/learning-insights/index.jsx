import React from 'react';
import StayInformedWithIndustryNews from './StayInformedWithIndustryNews';
import AcademyInsights from './AcademyInsights';
import BlogsAndNews from "./BlogsAndNews";

const LearningAndInsights = () => {
  return (
    <article className='text-[4vw] md:text-[2vw]'>
          <AcademyInsights />
          <BlogsAndNews />
        <StayInformedWithIndustryNews />
        </article>
  )
}

export default LearningAndInsights;