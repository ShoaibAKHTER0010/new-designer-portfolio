import React from 'react'

const Questions = () => {
  return (
    <section className='w-full py-20'>
        <main className="mx-auto max-w-7xl  pl-4 md:pl-10 px-6 ">
            {/* main div */}
            <div className='max-w-5xl'>
              {/* div one */}
              <div className='py-16'>
                <h2 className='text-gray-950 text-[44px] md:text-[56px] text-center md:text-left font-medium font-["DM Sans"] leading-[50px] md:leading-[66px]'>A few questions <br /> 
clients normally ask me</h2>
              </div>
              {/* div two */}
              <div className='border-e-red-700 border-b-4 flex justify-between '>
                {/* child one */}
                <div>
                <h3 className="text-indigo-600 text-[20px] md:text-[26px] font-medium font-['DM Sans'] leading-10">What is your  hourly rate?</h3>
                <p className=" text-md md:text-lg font-normal font-['DM Sans'] leading-[24px] md:leading-[30px] py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In <br /> urna, non nisl tincidunt ut elementum turpis.</p>
               
                </div>
                {/* child two */}
                <div className='py-6'>
                <ion-icon name="remove-circle-outline"size="large"></ion-icon>
                </div>
              </div>
              {/* div three */}
              <div className='border-gray-950 border-b-2 flex justify-between'>
                {/* child one */}
                <div>
                <h2 className="text-gray-950 text-[20px] md:text-[26px] font-medium font-['DM Sans'] leading-10 py-4">What type of projects do you take on?</h2></div>
                {/* child two */}
                <div className='py-6'>
                <ion-icon name="add-circle-outline" size="large" ></ion-icon>
                </div>
              </div>
              {/* div four */}
              <div className='border-e-red-700 border-b-4 flex justify-between'>
                {/* child one */}
                <div>
              <h2 className="text-gray-950 text-[20px] md:text-[26px] font-medium font-['DM Sans'] leading-10 py-5">How do you charge for projects ?</h2></div>
              {/* child two */}
              <div className='py-6'>
              <ion-icon name="add-circle-outline" size="large"></ion-icon>
              </div>
              </div>
              {/* div five */}
              <div className='border-gray-950 border-b-2 flex justify-between'> 
              {/* child one */}
              <div>
               <h2 className="text-gray-950 text-[20px] md:text-[26px] font-medium font-['DM Sans'] leading-10 py-5">What time-zone do you work in?</h2></div>
               {/* child two */}
               <div className='py-6'>
               <ion-icon name="add-circle-outline" size="large"></ion-icon>
               </div>
               </div>
              {/* div six */}
              <div className='border-e-red-700 border-b-4 flex justify-between'>
                {/* child one */}
                <div>
                  <h2 className="text-gray-950 text-[20px] md:text-[26px] font-medium font-['DM Sans'] leading-10 py-5">How often can we communicate?</h2>
                  </div>
                  {/* child two */}
                  <div className='py-6'><ion-icon name="add-circle-outline" size='large'></ion-icon></div>
                  </div>
                
            </div>
        </main>
    </section>
  )
}

export default Questions