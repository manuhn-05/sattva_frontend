import React, { useState } from 'react';



const ESGJourneyCard = ({ item }) => {
    const [viewMore, setViewMore] = useState(false);

    return (
        <div className='border-gray-400 border-[0.015em] shadow-lg mx-[3%] bg-white dark:bg-slate-600 p-[3%] rounded-md lg:min-h-[15vw] hover:shadow-2xl hover:scale-[0.95] duration-75'>
            <div>
                <h3 className='text-[1em] font-bold mb-[2%]'>{item?.title}</h3>
                <p className='text-[0.95em]'> 
                    <span>{item?.description?.substring(0, viewMore ? item?.description?.length : 221)}</span>
                    <span onClick={() => setViewMore(!viewMore)} className='text-[0.85em] text-[#007BFF] cursor-pointer mx-[1.5%]'>{viewMore ? "View Less" : "View More"}</span>
                </p>
            </div>
            <div className='mt-[1.5%] flex justify-between'>
                <div className='flex items-center w-[80%]'>
                    <img src={item?.profile} alt="" className='h-16 w-16 rounded-full' />
                    <p className='text-[0.85em] flex flex-col mx-[2%]'>
                        <span>{item?.name}</span>
                        <span>{item?.designation}</span>
                    </p>
                </div>
                {/* <img src={item?.profile} alt="" className='w-28' /> */}
            </div>
        </div>
    )
}

export default ESGJourneyCard