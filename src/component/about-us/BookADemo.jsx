import React from 'react'
import { BOOK_A_DEMO_REQUESTS_TYPE, COUNTRY_MOBILE_CODES, INDUSTRY_LIST, NUMBER_OF_EMPLOYEES } from '../../data/data'
import { Link } from 'react-router-dom'

const BookADemo = () => {
  return (
    <article className='min-h-[calc(100vh-200px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-slate-800'>
      <div className={`text-left md:text-center w-full`}>
        <h6 className="text-green-600 text-base font-medium uppercase mb-2">Book a Demo and See Sattva in Action</h6>
        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Discover a powerful ESG management and sustainability platform.</h3>

      </div>
      <section className="container flex justify-center">
        <form action="" className='lg:w-[80%] flex flex-col gap-y-4'>
          <div>
            <select
              name="book_a_demo_requests_type"
              className=" bg-white border rounded-lg border-gray-200 p-4 w-full "
              defaultValue=""
            >
              <option className='text-gray-400' value="" disabled>
                Type of contact request *
              </option>

              {BOOK_A_DEMO_REQUESTS_TYPE.map((item) => (
                <option className='' key={item.id} value={item.value}>
                  <span className='hover:text-blue-600 bg-white'>{item.label}</span>
                </option>
              ))}
            </select>

          </div>
          <div className='flex justify-between gap-2'>
            <input className='rounded-lg border border-gray-200 p-4 w-full' type="text" placeholder='First Name *' />
            <input className='rounded-lg border border-gray-200 p-4 w-full' type="text" placeholder='Last Name *' />
          </div>
          <div>
            <input className='rounded-lg border border-gray-200 p-4 w-full'  type="text" placeholder='Job Title *' />
            </div>
            <div>
            <input className='rounded-lg border border-gray-200 p-4 w-full'  type="text" placeholder='Email *' />
            </div>
            {/* Todo List of Country Codes for phone number */}
            <div className='flex justify-between gap-2'>
         
           <select
              name="book_a_demo_requests_type"
              className=" bg-white border rounded-lg border-gray-200 p-4 w-[30%] "
              defaultValue=""
            >
              {/* <option className='text-gray-400' value="" disabled>
                Type of contact request *
              </option> */}

              {COUNTRY_MOBILE_CODES?.map((item) => (
                <option className='' key={item.code} value={item.code}>
                  <span className='hover:text-blue-600 bg-white'>{item.name + " " + item.code}</span>
                </option>
              ))}
            </select>
          
            <input className='rounded-lg border border-gray-200 p-4 w-full' type="text" placeholder='Phone *' />
          </div>
          <div className='flex justify-between gap-2'>
            <input className='rounded-lg border border-gray-200 p-4 w-full' type="text" placeholder='Company *' />
            <select
              name="book_a_demo_requests_type"
              className=" bg-white border rounded-lg border-gray-200 p-4 w-full "
              defaultValue=""
            >
              <option className='text-gray-400' value="" disabled>
               HQ Country *
              </option>

              {COUNTRY_MOBILE_CODES?.map((item) => (
                <option className='' key={item.name} value={item.name}>
                  <span className='hover:text-blue-600 bg-white'>{item.name }</span>
                </option>
              ))}
            </select>
          </div>
          <div className='flex justify-between gap-2'>
                 
          <select
              name="book_a_demo_requests_type"
              className=" bg-white border rounded-lg border-gray-200 p-4 w-full "
              defaultValue=""
            >
              <option className='text-gray-400' value="" disabled>
               Industry *
              </option>

              {INDUSTRY_LIST?.map((item) => (
                <option className='' key={item.id} value={item.value}>
                  <span className='hover:text-blue-600 bg-white'>{item.label }</span>
                </option>
              ))}
            </select>
            
            <select
              name="book_a_demo_requests_type"
              className=" bg-white border rounded-lg border-gray-200 p-4 w-full "
              defaultValue=""
            >
              <option className='text-gray-400' value="" disabled>
               Number of Employees *
              </option>

              {NUMBER_OF_EMPLOYEES?.map((item) => (
                <option className='' key={item.id} value={item.value}>
                  <span className='hover:text-blue-600 bg-white'>{item.label }</span>
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea name="" id="" rows={5} placeholder='Tell us more abour your needs *' className='w-full rounded-lg border border-gray-200 p-4'></textarea>
          </div>
          <div>
            <input className='rounded-lg border border-gray-200 p-4 w-full'  type="text" placeholder='How did you hear about Sattva *' />
            </div>

<div className='text-gray-400'>
Sattva will use the contact information you share to communicate with you about our services, insights, and relevant offerings. You can unsubscribe from these communications at any time.
 To learn more about how we manage your preferences and protect your data, please review our <Link to={"/about"} className='underline '>Privacy Policy</Link>.
</div>
<div><button className='border border-gray-400 dark:text-white px-4 py-2 rounded-lg'>Submit</button></div>
        </form>
      </section>
    </article>
  )
}

export default BookADemo