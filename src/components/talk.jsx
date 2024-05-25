import React from 'react'

const Talk = () => {
  return (
    <section className='w-full'>
        <main className="mx-auto max-w-7xl  pl-4 md:pl-14 py-16  ">
            {/* main div */}
            <div className='max-w-6xl bg-[#FBFAFF] py-16'
            style={{
                backgroundImage : "url('./images/talk-bg.png')",
                backgroundPosition:'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
               }}>
                {/* first div */}
                <div className='flex justify-center'>
                    <img src="./images/talk-logo.PNG" alt="logo" />
                    </div>
                {/* second div */}
                <div>
                  <h2 className="text-center text-gray-950 text-[32px] md:text-[40px] font-medium font-['DM Sans'] leading-[56px] md:leading-[66px] py-6">Got a project? Let’s talk</h2>
                  <p className="text-center text-gray-600 text-lg font-normal font-['DM Sans'] leading-[24px] md:leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non <br /> nisl tincidunt ut elementum turpis.</p>
                </div>
                {/* third div */}
                <div className='w-full flex justify-center items-center py-10 '>
                <button className='bg-[#553dc0] text-white px-5 py-3'>All Projects</button>
               </div>

            </div>
        </main>
    </section>
  )
}

export default Talk