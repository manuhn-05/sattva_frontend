import React from 'react'
import { PARTNERS_NETWORK } from '../../data/data';
import UserImage from "../../assets/images/about/Jeremie_Joos.webp"


const ESGEcoSystem = () => {
    const [activetab, setActivetab] = React.useState('partners-network');
    const [selectedPartner, setSelectedPartner] = React.useState(PARTNERS_NETWORK[0]);
    // const styles=`button border border-gray-400 rounded-lg px-[5%] py-[1%] w-[30%]`
    return (
        <section className='min-h-[calc(100vh-200px)] flex flex-col items-center p-4 md:py-28  dark:bg-[#0F172A]'>
            <div className="text-left md:text-center">
                <h6 className="text-green-600 text-base font-medium uppercase mb-2">Built on Strong Partnerships</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">We are part of a strong and trusted ESG ecosystem.</h3>
            </div>
            <div className="container ">
                {/* <div className='flex justify-evenly'>
                    <button onClick={()=>setActivetab('partners-network')} className={`${styles} ${activetab==='partners-network'?'bg-blue-600 text-white':''}`}>
                        Partners Network
                    </button>
                    <button  onClick={()=>setActivetab('climate-alliances')}  className={`${styles} ${activetab==='climate-alliances'?'bg-blue-600 text-white':''}`}>
                        Climate Alliances
                    </button>
                    <button  onClick={()=>setActivetab('impact')}  className={`${styles} ${activetab==='impact'?'bg-blue-600 text-white':''}`}>
                        Impact
                    </button>
                </div> */}

                <section className='mt-[5%]'> 
                    {
                        activetab==='partners-network' && <div className='grid grid-cols-2 md:grid-cols-4 gap-[2%] gap-y-[7%]'>

                            {
                                PARTNERS_NETWORK?.map((partner)=>(
                                    <div onClick={()=>setSelectedPartner(partner)} className='border rounded-lg py-[5%] px-[3%] flex justify-center items-center cursor-pointer'>

                                    <img key={partner.id} src={partner.src} alt={partner.id} className='w-[70%]'/>

                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        activetab==='climate-alliances' && <div className='grid grid-cols-2 md:grid-cols-4 gap-[2%] gap-y-[7%]'>
                             {
                                PARTNERS_NETWORK?.slice(0,5)?.map((partner)=>(
                                    <div onClick={()=>setSelectedPartner(partner)} className='border rounded-lg py-[5%] px-[3%] flex justify-center items-center cursor-pointer'>
 
                                    <img key={partner.id} src={partner.src} alt={partner.id} className='w-[70%]'/>

                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        activetab==="impact" && <div className='grid grid-cols-2 md:grid-cols-4 gap-[2%] gap-y-[7%]'>
                               {
                                PARTNERS_NETWORK?.slice(0,7)?.map((partner)=>(
                                    <div onClick={()=>setSelectedPartner(partner)} className='border rounded-lg py-[5%] px-[3%] flex justify-center items-center cursor-pointer'>

                                    <img key={partner.id} src={partner.src} alt={partner.id} className='w-[70%]'/>

                                    </div>
                                ))
                            }
                        </div>
                    }
                
                </section>

                <div className='border mt-[15%] md:mt-[5%] p-[5%] border-gray-200 rounded-lg '>

                    <div>
                        {selectedPartner?.description}
                    </div>
                    <div className='flex justify-between mt-[5%]'>
                        <div className='flex items-center gap-4'>
                            <img src={selectedPartner?.person?.image} alt="User Profile Pic" className='w-24 rounded-full' />
                            <p className='flex flex-col text-[0.9em]'>
                                <span>{selectedPartner?.person?.name}</span>
                                <span>{selectedPartner?.person?.designation}</span>

                            </p>
                        </div>
                        <div className='border border-gray-300 rounded-lg p-[1%] flex items-center'>
                        <img src={selectedPartner?.src} alt="User Profile Pic" className='w-24 rounded-full' />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ESGEcoSystem