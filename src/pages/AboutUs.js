import React from 'react'
import WhySattva from '../component/about-us/WhySattva'
import ESGJourneyWithSattva from '../component/about-us/ESGJourneyWithSattva'
import ESGEcoSystem from '../component/about-us/ESGEcoSystem'
import ExploreSattva from '../component/about-us/ExploreSattva'
import AwardsAndRecognition from '../component/about-us/AwardsAndRecognition'
import BookADemo from '../component/about-us/BookADemo'

export default function AboutUs() {
  return (
    <div>
      <WhySattva />
      <ESGJourneyWithSattva />

      <ESGEcoSystem />
      <AwardsAndRecognition />
      <ExploreSattva />
      <BookADemo />
    </div>
  )
}
