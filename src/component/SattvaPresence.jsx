import SattvaFootPrint from "../assets/images/home-page/MAP1.svg"

const SattvaPresence = () => {
    return (
        <article className="relative py-16 bg-gradient-to-r from-green-600/50 dark:from-green-600/60 via-green-600/10 dark:via-green-600/20 to-transparent">

            <section className="md:w-[75%] flex items-center justify-center h-fit mx-auto rounded-lg" >
                <div className="w-[65%] flex flex-col items-center justify-center h-full border p-[2%] border-black rounded-lg">
                    <img src={SattvaFootPrint} alt="Sattva Foot Print" className="w-full h-full" />
                </div>
                <div className="flex flex-col items-center justify-evenly h-full text-white mb-[3%]">
                    <div className="px-[3%] py-[5%] rounded-lg text-center lg:w-[60%] bg-[#0C464B]">
                    Proud to serve clients and partners across 10+ countries
                    </div>
                    <div className="px-[3%] py-[5%] rounded-lg text-center lg:w-[60%] bg-[#0C464B] mt-[3%]">
                    South Asia | South East Asia | Middle East | Africa | North America
                    </div>
                </div>
            </section>
        </article>
    )
}

export default SattvaPresence