import React from 'react'

const Projects = () => {
  return (
    <section className=" w-full md:bg-[#5D3BEE] bg-white">
        <main className='className="mx-auto max-w-7xl  pl-4 md:pl-10 md:py-24 py-14'>
            {/* main div */}
            <div className='w-full flex flex-col md:flex-row   md:gap-10 gap-0 justify-center items-center'>
               {/* first div */}
               <div className='flex  flex-col gap-10'>
                {/* card one */}
                <div className='w-[570px] h-[234px] px-5 pt-16'>
            <p className='md:text-white text-black text-[44px]  md:text-[56px] font-medium font-["DM Sans"] leading-[66px]'>Take a look at my recent projects</p>
                </div>
                {/* card two */}
                <div className='w-[570px] h-[234px] bg-white flex px-5 py-5 gap-5 shadow-lg md:shadow-none'
                 style={{
                    backgroundImage : "url('./images/card-bg.png')",
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                   }}>
                 {/* main-1 */}
                 <div className='w-1/2 '>
                 <h2 className="text-gray-950 text-[32px] font-medium font-['DM Sans'] leading-10">Wally Website</h2>
                 <p className='text-gray-600 text-base font-normal font-["DM Sans"] leading-[23px] pt-4'>Lorem ipsum dolor amet, consectetur adipiscing st elit.</p>
                 <p className='text-gray-950 text-lg font-bold font-["DM Sans"] underline leading-[30px] pt-14'>Case Study</p>
                 </div>
                 {/* main-2 */}
                 <div className='w-1/2'>
                 <img src="./images/card-1.png" alt="img" />
                 </div>
                </div>
                {/* card three */}
                <div className='w-[570px] h-[234px] bg-white flex px-5 py-5 gap-5 shadow-lg md:shadow-none'
                 style={{
                    backgroundImage : "url('./images/card-bg.png')",
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                   }}>
                 {/* main-1 */}
                 <div className='w-1/2 '>
                 <h2 className="text-gray-950 text-[32px] font-medium font-['DM Sans'] leading-10">Web App</h2>
                 <p className='text-gray-600 text-base font-normal font-["DM Sans"] leading-[23px] pt-4'>Lorem ipsum dolor amet, consectetur adipiscing st elit.</p>
                 <p className='text-gray-950 text-lg font-bold font-["DM Sans"] underline leading-[30px] pt-14'>Case Study</p>
                 </div>
                 {/* main-2 */}
                 <div className='w-1/2'>
                 <img src="./images/card-2.png" alt="img" />
                 </div>
                </div>
               </div>

               {/* second div */}
               <div className='flex flex-col gap-10'>
                {/* card one */}
                <div className='w-[570px] h-[234px] px-5 pt-16'>
            <p className="md:text-white text-black md:opacity-70 opacity-100 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In urna, non nisl tincidunt ut <br /> elementum turpis.</p>
                </div>
                {/* card two */}
                <div className='w-[570px] h-[234px] bg-white flex px-5 py-5 gap-5 shadow-lg md:shadow-none'
                 style={{
                    backgroundImage : "url('./images/card-bg.png')",
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                   }}>
                 {/* main-1 */}
                 <div className='w-1/2 '>
                 <h2 className="text-gray-950 text-[32px] font-medium font-['DM Sans'] leading-10">Banking App</h2>
                 <p className='text-gray-600 text-base font-normal font-["DM Sans"] leading-[23px] pt-4'>Lorem ipsum dolor amet, consectetur adipiscing st elit.</p>
                 <p className='text-gray-950 text-lg font-bold font-["DM Sans"] underline leading-[30px] pt-14'>Case Study</p>
                 </div>
                 {/* main-2 */}
                 <div className='w-1/2'>
                 <img src="./images/card-3.png" alt="img" />
                 </div>
                </div>
                {/* card three */}
                <div className='w-[570px] h-[234px] bg-white flex px-5 py-5 gap-5 shadow-lg md:shadow-none'
                 style={{
                    backgroundImage : "url('./images/card-bg.png')",
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                   }}>
                 {/* main-1 */}
                 <div className='w-1/2 '>
                 <h2 className="text-gray-950 text-[32px] font-medium font-['DM Sans'] leading-10">Oculus Website</h2>
                 <p className='text-gray-600 text-base font-normal font-["DM Sans"] leading-[23px] pt-4'>Lorem ipsum dolor amet, consectetur adipiscing st elit.</p>
                 <p className='text-gray-950 text-lg font-bold font-["DM Sans"] underline leading-[30px] pt-14'>Case Study</p>
                 </div>
                 {/* main-2 */}
                 <div className='w-1/2'>
                 <img src="./images/card-4.png" alt="img" />
                 </div>
                </div>
               </div>
               
            </div>
            {/* button */}
            <div className='w-full flex justify-center items-center py-10 pt-16'>
                <button className='bg-[#5D3BEE] text-white md:text-black
                md:bg-white px-5 py-3'>All Projects</button>
               </div>
        </main>
    </section>
  )
}

export default Projects