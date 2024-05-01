import React from 'react'

const Special = () => {
  return (
    <section className=" w-full ">
        <main className='className="mx-auto max-w-7xl  pl-4 md:pl-10 py-24"'>
            {/* main div */}
            <div className='w-full'>
                {/* first div */}
                <div>
                    <h2 className='text-center text-gray-950 text-[56px] font-medium font-["DM Sans"] leading-[66px]'>Specialities</h2>
                    <p className="text-center text-gray-600 text-lg font-normal font-['DM Sans'] leading-[30px] pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, <br /> non nisl tincidunt ut elementum turpis.</p>
                </div>
              {/* second div */}
              <div className='flex flex-col md:flex-row  items-center justify-center gap-10 py-14'>
                {/* one */}
                <div className='w-full md:w-[350px] h-[306px] bg-[#FBFAFF] flex-col py-8 px-8'>
                   <div className=''> <img src="./images/bulb.png" alt="img" />
                    <h2 className='text-gray-950 text-[32px] font-medium font-["DM Sans"] leading-10'>Product design</h2>
                    <p className='text-gray-600 text-lg font-normal font-["DM Sans"] leading-[30px]'>Lorem ipsum dolor sit amet, solor adipiscing elit. Non nisl solor ut elementum turpis.</p>
                    </div>
                </div>
                {/* two */}
                <div className='w-full md:w-[370px] h-[306px] bg-[#FBFAFF] flex-col py-8 px-8'>
                <div> <img src="./images/pencil.png" alt="img" /></div>
                    <h2 className='text-gray-950 text-[32px] font-medium font-["DM Sans"] leading-10'>UI/UX Design</h2>
                    <p className="text-gray-600 text-lg font-normal font-['DM Sans'] leading-[30px] ">Lorem ipsum dolor sit amet, solor adipiscing elit. Non nisl solor ut elementum turpis.</p>
                </div>
                {/* three */}
                <div className='w-full md:w-[370px] h-[306px] bg-[#FBFAFF] flex-col py-8 px-8'>
                <div className='w-full'> <img src="./images/phone.png" alt="img" /></div>
                    <h2 className='text-gray-950 text-[32px] font-medium font-["DM Sans"] leading-10'>Interactive design</h2>
                    <p className="text-gray-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet, solor adipiscing elit. Non nisl solor ut elementum turpis.</p>
                </div>

              </div>

            </div>
        </main>

    </section>
  )
}

export default Special