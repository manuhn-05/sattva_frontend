
const StayInformedWithIndustryNews = () => {
    return (
        <section className='w-full p-[3%] rounded-2xl bg-gray-50 dark:bg-[#0F172A]'>
           <div className="container">
           <div className={`w-[80%] min-h-[10em] mx-auto p-[5%] bg-white dark:bg-[#182646] text-[0.45em] md:text-[0.9em]  shadow-xl
            lg:text-[0.45em] flex flex-col lg:flex-row justify-evenly gap-[2%] items-center rounded-xl max-lg:gap-y-4`}>
                <h3 className='w-full max-md:text-center text-green-600 lg:text-[1.2em]'> Stay informed with industry news and insights</h3>
                <form className='flex max-lg:flex-col flex-row items-center justify-between w-full max-lg:gap-y-4 gap-[2%]'>
                    <div className=' max-md:w-[80%] w-full'>
                        <input type="email" name="email" className="form-input rounded-full bg-white border" placeholder="Enter your E-mail ID:" />
                    </div>

                    <div>
                        <button type="button" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Subscribe</button>

                    </div>
                </form>
            </div>
           </div>
        </section>
    )
}

export default StayInformedWithIndustryNews;