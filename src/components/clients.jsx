
import React from 'react'

function Clients() {
  return (
    <section className=" w-full ">
        <main className="mx-auto max-w-7xl  flex   md:gap-16  pl-4 md:pl-10 py-24">
            {/* main */}
            <div className='w-full md:flex-row flex-col gap-24'>
            <div className=' flex gap-4 '>
                {/* child one */}
                {/* empty div */}
               <div className='md:w-20 w-40 h-1 border-2 border-[#5D3BEE] my-6'></div>
               {/* 2nd */}
               <div>
               <p className="text-gray-950 text-[36px] md:text-[42px] font-medium font-['DM Sans'] leading-[50px]">Meet my <br /> 
recent clients</p>
               </div>
               </div>

               {/* child two */}
               <div className='flex flex-row md:flex-col gap-8 md:gap-12 justify-center pt-16 pl-0 md:pl-24 '>
               {/* 1st */}
               <div className='flex flex-col md:flex-row gap-14'>
                <img src="./images/client-1.png" alt="client-1" />
                <img src="./images/client-2.png" alt="client-2" />
                <img src="./images/client-3.png" alt="client-3" />
                <img src="./images/client-4.png" alt="client-4" />
               </div>
               {/* 2nd */}
               <div className='flex flex-col md:flex-row gap-14'>
            <img src="./images/client-5.png" alt="client-5" />
            <img src="./images/client-6.png" alt="client-6" />
            <img src="./images/client-7.png" alt="client-7" />
            <img src="./images/client-8.png" alt="client-8" />
               </div>
               </div>
            

            </div>
        </main>

    </section>
  )
}

export default Clients