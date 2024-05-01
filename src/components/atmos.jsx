import React from 'react'

const Atmos = () => {
  return (
    <section className='w-full'>
        <main className="mx-auto max-w-7xl  px-4 md:px-10 py-16">
            {/* main div */}
            <div className='w-full'>
                {/* first div */}
                <div>
                 <h2 className="text-gray-950 text-[44px] md:text-[56px] text-center font-medium font-['DM Sans'] leading-[56px] md:leading-[66px]">My atmosphere</h2>
                 <p className="text-center text-gray-600 text-md md:text-lg font-normal font-['DM Sans'] leading-[24px] md:leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, <br /> non nisl tincidunt ut elementum turpis.</p>
                 <h3 className="text-indigo-600 taxt-[26px] md:text-[32px] text-center font-medium font-['DM Sans'] underline leading-10">@interaction_arif</h3>
                </div>
                {/* second div */}
                <div className='flex flex-col md:flex-row w-full  gap-10 py-16'>
                    {/* child one */}
                    <div className='w-full md:w-1/3 '><img src="./images/lap-1.png" alt="img" className='w-full md:relative' /></div>
                    {/* child two */}
                    <div className='w-full md:w-1/3'><img src="./images/lap-2.png" alt="img" className='w-full md:relative' /></div>
                    {/* child three */}
                    <div className='w-full md:w-1/3'><img src="./images/lap-3.png" alt="img" className='w-full md:relative' /></div>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Atmos