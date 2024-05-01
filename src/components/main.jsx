import React from 'react'



const Home = () => {
  return (
    <section className=" w-full ">
    <main className="mx-auto max-w-full  md:max-w-7xl   flex   gap-6 md:gap-16  pl-0 md:pl-10  ">
     {/* first main div */}
     <div className="w-1/2 h-96 md:h-auto flex-wrap" 
     style={{
     backgroundImage : "url('./images/person bg.png')",
     backgroundPosition:'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     
    }} >
        <img src="./images/person.png" alt="img-2" />
    </div>

     {/* second main div */}
     <div className="w-1/2 pt-4  md:pt-40">
       
      <p className=" text-gray-950 text-[44px] md:text-[55px] font-medium font-['DM Sans'] leading-[40px] md:leading-[76px]">
      An Interactive <br /> Designer
      </p>

      <p className=" text-gray-600 text-lg font-normal font-['DM Sans'] leading-[22px] md:leading-[30px] pt-6">
      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In urna, non nisl tincidunt ut <br /> elementum turpis.
      </p>

     {/* button portion */}
     <div className='flex flex-col md:flex-row max-w-full py-10 md:py-24'>
     {/* div one */}
     <div className='md:w-1/2 w-full flex gap-1 md:gap-3'>
     <button className='bg-indigo-600 text-white text-md md:text-lg font-bold font-["DM Sans"] leading-none md:leading-[30px] py-1 md:py-2 px-3 md:px-5 shadow-lg'>Book a Call</button>
     <span className='pt-3 text-gray-950 text-md md:text-lg font-bold font-["DM Sans"] underline leading-none md:leading-[30px]'>My Works</span>
     </div>
     {/* div two */}
    <div className='md:w-1/2 w-full flex gap-4 pt-6 md:pt-0'>
      {/* first */}
    <span className='text-gray-600 text-base font-medium font-["DM Sans"] leading-none md:leading-[30px] pt-2 md:pt-0'>Follow me on:</span>
{/* second */}
<div className='flex gap-3'>
<ion-icon name="logo-behance"size="large"></ion-icon>
<ion-icon name="basketball-outline" size="large"></ion-icon>
<ion-icon name="logo-instagram" size="large"></ion-icon>

</div>

</div>

 </div>
    </div>
    </main>
  </section>
  )
}

export default Home;