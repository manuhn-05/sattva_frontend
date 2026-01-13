import React from 'react'
import { OUR_TEAM } from '../../data/data';
import TeamCard from './TeamCard';

const OurTeamComponent = () => {
    return (
        <article className='min-h-[calc(100vh-120px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-slate-800'>
            <div className="container">
                {/* MAIN PILLARS */}
            <div className="text-left md:text-center">
                <h6 className="text-green-600 text-base font-medium uppercase mb-2"> Our Leadership</h6>
              
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2%] w-full'>
            
                {OUR_TEAM.leadership.map(member => (
                    <TeamCard key={member.id} {...member} />
                ))}

               

            </section>
            {/* TEAM MEMBERS */}
            <div className="text-left md:text-center">
                <h6 className="text-green-600 text-base font-medium uppercase my-[2%] "> Our Team</h6>
              
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2%] w-full'>
            {OUR_TEAM.teamMembers.map(member => (
                    <TeamCard key={member.id} {...member} />
                ))}
            </section>
            </div>
        
        </article>
    )
}

export default OurTeamComponent;