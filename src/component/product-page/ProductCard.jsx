import React from 'react'

const ProductCard = ({className, imgSrc, title, listItems, description}) => {
  return (
    <section className='w-full h-full flex items-center justify-center text-black dark:text-[#f8f8ff] bg-white dark:bg-[#0F172A] border rounded-xl'>

        <div className={className}>
            <div className='w-[65%]'>
                <img src={imgSrc} alt={title} />
            </div>
            <div className='w-full lg:w-[90%] lg:min-h-[20em] flex flex-col justify-between'>
                <h3 className='text-[0.7em] md:text-[1.7em] font-bold'>{title}</h3>
                <div>
                   <p className='text-[0.65em] md:text-[1.5em] lg:text-[0.95em] md:leading-7 text-justify'>
                   {description}
                   </p>
                </div>
                <ul className='text-[0.65em] md:text-[1.5em] lg:text-[0.95em] grid grid-cols-2 gap-[1em]'>
                    {
                        listItems.map((item) => (
                            <li key={item?.id}><i className='uil-check-circle text-green-600'></i> <span>{item?.title} </span> </li>
                        ))
                    }
                </ul>


            </div>
        </div>
    </section>
  )
}

export default ProductCard