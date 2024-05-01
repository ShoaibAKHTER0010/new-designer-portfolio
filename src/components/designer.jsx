import React from 'react'

const Designer = () => {
  return (
    <section  className='w-full bg-[#FBFAFF]'>
        <main className="mx-auto max-w-7xl  pl-4 md:pl-10 py-16 ">
            {/* main div */}
            <div className='w-full'>
              {/* first div */}
              <div>
                {/* one */}
                <div className='w-full flex justify-center items-center py-8'>
                    <h2 className='text-indigo-600 text-[32px] font-medium font-["DM Sans"] leading-10'>Hey,,,,It’s Arif</h2>
                    <img src="./images/hyy-logo.png" alt="logo" />
                </div>
                {/* two */}
                <div className='w-full'>
                    <h1 className="text-gray-950 text-[44px] md:text-[56px] text-center font-medium font-['DM Sans'] leading-[66px]">Interactive Designer</h1>
                    <p className="text-center text-gray-600 text-lg font-normal font-['DM Sans'] md:leading-[30px] leading-[24px] py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non <br /> nisl tincidunt ut elementum turpis.</p>
                </div>
                {/* three */}
                <div className='max-w-7xl flex justify-center md:gap-28 gap-16 md:py-10 py-4 mt-16  border-t-2 border-e-red-700 border-b-2'>
                    {/* child-1 */}
                    <div className=''>
                        <h1 className='text-gray-950 text-[44px] md:text-[56px] font-medium font-["DM Sans"] underline leading-[76px] tracking-widest'>08+</h1>
                        <p className="text-gray-600 text-lg font-normal font-['DM Sans'] md:leading-[30px] leading-[24px]">Years Experience</p>
                    </div>
                    {/* child-2 */}
                    <div>
                    <h1 className='text-gray-950 text-[44px] md:text-[56px] font-medium font-["DM Sans"] underline leading-[76px] tracking-widest'>21+</h1>
                        <p className="text-gray-600 text-lg font-normal font-['DM Sans']    leading-[24px] md:leading-[30px]">Features & Awards</p>
                    </div>
                    {/* child-3 */}
                    <div>
                    <h1 className='text-gray-950 md:text-[56px] text-[44px] font-medium font-["DM Sans"] underline leading-[76px] tracking-widest'>97%</h1>
                        <p className="text-gray-600 text-lg font-normal font-['DM Sans'] leading-[24px]md:leading-[30px]">Clients Rating</p>
                    </div>

                </div>

              </div>
              {/* second div */}
              <div className='w-full flex justify-center py-20'>
                <div className='max-w-5xl '>
                  <img src="./images/designer.png" alt="" />
                </div>

              </div>
            </div>
        </main>
    </section>
  )
}

export default Designer