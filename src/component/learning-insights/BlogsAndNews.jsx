import React, { useEffect, useMemo, useState } from 'react'
import { ACADEMY_INSIGHTS_RESOURCES_DUMMY, LIST_OF_RESOURCE_TYPE } from '../../data/data'


const INITIAL_VISIBLE_COUNT = 10;
const BlogsAndNews = () => {

const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [selectedResourceType, setSelectedResourceType] = useState("all");

    

    useEffect(() => {
        setVisibleCount(INITIAL_VISIBLE_COUNT);
      }, [selectedResourceType]);

      const listOfBlogsAndNews = useMemo(() => {
        if (selectedResourceType === "all") return ACADEMY_INSIGHTS_RESOURCES_DUMMY;
      
        return ACADEMY_INSIGHTS_RESOURCES_DUMMY.filter(
          (blog) => blog?.type?.toLowerCase() === selectedResourceType?.toLowerCase()
        );
      }, [selectedResourceType]);
      
      const visibleBlogs = useMemo(() => {
        return listOfBlogsAndNews.slice(0, visibleCount);
      }, [listOfBlogsAndNews, visibleCount]);
      

    return (
        <article className='w-full h-full py-16 flex items-center justify-center text-black dark:text-[#f8f8ff] bg-white dark:bg-[#0F172A] rounded-xl'>
            <section className="container ">
                <div
                    className='flex flex-col items-center'>
                    <h3 className="text-green-600 text-[0.7em] lg:text-base font-medium uppercase mb-2">Featured</h3>
                    {/* <h2>Blogs and News</h2> */}
                </div>
                <div className='grid md:grid-cols-[70%_30%] gap-[1.5%]'>
                <div className={`block md:hidden`}>
                        <div className='bg-[#F2F8F2] rounded-lg p-[2.5%]'>
                            <p className='text-[0.7em] lg:text-[0.45em] font-medium w-full flex justify-between' onClick={() => setIsDropDownVisible((prev) => !prev)}>
                                <span>Resource Type </span><i className="uil uil-angle-down text-green-600 lg:text-[1.2em]"></i></p>

                            {
                                isDropDownVisible && (<>
                                    {
                                        LIST_OF_RESOURCE_TYPE?.map((type) => (
                                            <div className={`text-[0.7em] lg:text-[0.45em] font-light w-full flex justify-between cursor-pointer
                                            ${selectedResourceType === type.id ? "text-green-600" : ""}`}
                                                onClick={() => setSelectedResourceType(type.id)}

                                                key={type.id}>
                                                <span>{type.title}</span>
                                            </div>
                                        ))
                                    }

                                </>)
                            }


                        </div>
                        <div>

                        </div>
                        <div className='bg-green-300/30 p-2 rounded-xl border-b md:text-[0.85em] lg:text-[0.5em] my-[2%]'>
                            <i className="uil uil-search"></i>  <input placeholder='Search' className='bg-transparent outline-none' type="text" />
                            <br />
                            <span className='w-[95%] h-[1px] bg-green-600 block mx-auto' />
                        </div>
                    </div>
                    <div className='gap-y-4 grid grid-cols-1 gap-[2%] md:grid-cols-2 my-[2%] w-full'>
                        {visibleBlogs?.map((blog) => (
                            <div className=' border border-gray-300 rounded-xl overflow-hidden min-h-[5em] flex flex-col justify-between' key={blog.id}>
                                <div className='w-full max-h-[5em]'>
                                    <img src={blog.imgSrc} alt={blog.title} className='w-full h-full object-cover' />
                                </div>
                                <div className='w-full h-full'>
                                    <h4 className='text-[0.7em] p-[1%] lg:text-[0.45em] lg:leading-6 font-medium mb-2'>{blog.title}</h4>
                                    <p className='text-[0.5em] lg:text-[0.45em] text-justify line-clamp-3 px-[1%] flex justify-evenly'>
                                        <span><i className="uil uil-calendar-alt"></i> {blog.updated}</span>
                                        <span><i className="uil uil-clock-eight"></i> {blog.timeToRead}</span>
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={` hidden md:block`}>
                        <div className='bg-[#F2F8F2] rounded-lg p-[2.5%]'>
                            <p className='text-[0.7em] lg:text-[0.45em] font-medium w-full flex justify-between' onClick={() => setIsDropDownVisible((prev) => !prev)}>
                                <span>Resource Type </span><i className="uil uil-angle-down text-green-600 lg:text-[1.2em]"></i></p>

                            {
                                isDropDownVisible && (<>
                                    {
                                        LIST_OF_RESOURCE_TYPE?.map((type) => (
                                            <div className={`text-[0.7em] lg:text-[0.45em] font-light w-full flex justify-between cursor-pointer
                                            ${selectedResourceType === type.id ? "text-green-600" : ""}`}
                                                onClick={() => setSelectedResourceType(type.id)}

                                                key={type.id}>
                                                <span>{type.title}</span>
                                            </div>
                                        ))
                                    }

                                </>)
                            }


                        </div>
                        <div>

                        </div>
                        <div className='bg-green-300/30 p-2 rounded-xl border-b md:text-[0.85em] lg:text-[0.5em] my-[2%]'>
                            <i className="uil uil-search"></i>  <input placeholder='Search' className='bg-transparent outline-none' type="text" />
                            <br />
                            <span className='w-[95%] h-[1px] bg-green-600 block mx-auto' />
                        </div>
                    </div>
                </div>
                {visibleCount < listOfBlogsAndNews.length && (
  <div className="w-full flex justify-center mt-[7.5%] md:mt-6">
    <button
      onClick={() => setVisibleCount(listOfBlogsAndNews.length)}
      className="px-6 py-2 text-[0.7em] lg:text-[0.5em] 
                 rounded-lg border border-green-600 
                 text-green-600 hover:bg-green-600 
                 hover:text-white transition"
    >
      Load More
    </button>
    
  </div>
)}

            </section>
        </article>
    )
}

export default BlogsAndNews