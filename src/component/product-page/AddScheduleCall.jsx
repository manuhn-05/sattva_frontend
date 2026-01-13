import React from 'react'

const AddScheduleCall = () => {
    return (
        <section className='w-full min-h-[10vw] bg-white dark:bg-[#0F172A] rounded-xl py-16'>
            <div className="container flex flex-col justify-between items-center">
                <div className='flex flex-col items-center my-[2%]'>
                    <h6 className="text-green-600 text-base font-medium uppercase mb-2">Start collecting data seamlessly</h6>
                    <p className='text-[0.45em] md:text-[0.8em] lg:text-[0.45em] flex flex-col text-center'><span>Speak to one of our carbon accounting experts and begin your</span>
                    <span> sustainability journey today.</span> </p>
                </div>

                <div className=' my-[2%]'>
                <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Schedule a call </button>
                </div>

            </div>
        </section>
    )
}

export default AddScheduleCall