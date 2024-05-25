import React from 'react'

const People = () => {
  return (
    <section  className='w-full bg-[#c7c5cf]'>
        <main className="mx-auto max-w-7xl  pl-4 md:pl-10 ">
            {/* main div */}
            <div className='w-full'>
                {/* div one */}
                <div className='flex-col justify-center'>
                    <h1 className="text-gray-950 text-[44px] md:text-[56px] text-center font-medium font-['DM Sans'] leading-[66px] py-8">What people says</h1>
                    <p className="text-center text-gray-600 text-lg font-normal font-['DM Sans'] md:leading-[30px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non <br /> nisl tincidunt ut elementum turpis.</p>

                    <p className="text-center text-gray-600 md:text-2xl text-xl font-normal font-['DM Sans'] md:leading-10 leading-6 py-14">“Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> cupidatat non proident, sunt in culpa.”</p>
                </div>
                {/* div two */}
                <div className='w-full flex-col justify-center'>
                 {/* child-1 */}
                 <div className='flex justify-center gap-3'>
                    <img src="./images/person-2.png" alt="img" />
                    <h2 className="text-center text-gray-950 md:text-3xl text-2xl font-medium font-['DM Sans'] leading-10">Joe Elia</h2>
                 </div>
                 <p className="text-center text-gray-600 text-base font-normal font-['DM Sans'] leading-[29px] py-6">User Interface Design at PCL Lab</p>
                </div>

            </div>
        </main>
    </section>
  )
}

export default People