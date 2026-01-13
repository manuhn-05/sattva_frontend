import ProductHero from "../../assets/images/portfolio/4.jpg"


const ESGManagementHero = () => {
    const LIST_OF_KEY_CAPABILITIES = [
        { id : "1", listItem : "Centralize ESG, sustainability, and EHS data across the organization",},
        { id : "2", listItem : "Monitor environmental performance, risks, and incidents in real time",},
        { id : "3", listItem : "Ensure regulatory compliance and maintain audit-ready documentation",},
        { id : "4", listItem : "Improve transparency, decision-making, and stakeholder reporting",},



    ]
  return (
    <article className={`min-h-[calc(100vh-100px)] flex flex-col items-center p-4 md:py-32 bg-gray-50 dark:bg-[#0F172A] 
        bg-gradient-to-b from-green-600/20 dark:from-green-600/40 via-green-600/10 dark:via-green-600/20 to-transparent`}>
      <section className={`container grid grid-cols-1 md:grid-cols-[60%_40%] gap-[2%]`}>
        <div className="text-left md:text-center">
          <h6 className="text-green-600 text-base font-medium uppercase mb-2">ESG management is now easier than ever</h6>
      <div className='text-[0.45em]'>
      <p className={`text-justify `}>
          SATTVA- Safe and Sustainable is an integrated solution that helps organizations manage sustainability initiatives, 
          ESG performance, environmental impact, risk, and compliance through a single, centralized platform.
          </p>
          <h6 className='text-[1em] font-bold dark:text-white text-left my-[2%]'>Key Capabilities</h6>
          <ul className='list-disc list-inside text-left leading-9'>
            {
                LIST_OF_KEY_CAPABILITIES?.map((item)=>(
                    <li key={item?.id}>{item?.listItem}</li>
                ))
            }
          </ul>
      </div>
         
        </div>
        <div className='w-full h-full rounded-xl overflow-hidden'>
            <img src={ProductHero} alt="Products Page hero " className='w-full h-full object-cover' />

        </div>
      </section>
    </article>
  )
}

export default ESGManagementHero