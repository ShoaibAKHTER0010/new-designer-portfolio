import React from 'react'

const Footer = () => {
    let Links =[
        {name:"Projects",link:"/"},
        {name:"Journey",link:"/"},
        {name:"Service",link:"/"},
        {name:"Contact",link:"/"},
      
       
      ];
    return (
        <main className='w-full  sticky top-0 z-50  backdrop-blur-lg  bg-transparent pl-24'>
    {/* main div-1 */}
      <div className='md:max-w-6xl max-w-7xl  flex justify-end  border-e-red-700 border-b-2'>
        {/* first div */}
        <div className='flex flex-col md:flex-row items-center md:gap-24 gap-0    md:px-16 px-4 '>
        
        <div className=''> <img src="./images/Logo-1.png" alt="img-2" /></div>
  
  <div className=''>
        <ul className={`flex md:items-center pb-10 md:pb-0 text-wrap md:text-right     w-7xl md:w-auto  transition-all duration-500 ease-in `}>
          {
            Links.map((link)=>(
              <li key={link.name} className=" md:my-0 my-7 text-gray-600 text-lg font-normal font-['DM Sans'] md:text-base px-3  md:px-8 ">
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        
        </ul>
        </div>
  
        </div>
       

      </div>
       {/* main div-2 */}
       <div className='max-w-7xl  flex justify-between py-8'>
        {/* div one */}
        <div className=''>
            <p className='opacity-60 text-slate-700 md:text-lg text-md font-normal font-["DM Sans"] md:leading-[30px] leading-[24px]'>©interactiveArif 2021. All rights reserved.</p>
        </div>
        {/* div two */}
        <div className='md:pr-24 pr-0'>
            <p className='opacity-60 text-slate-700 md:text-lg text-md font-normal font-["DM Sans"] md:leading-[30px] leading-[14px]'>
            Privacy Policy  <span className='border-e-red-700 border-l-4 pl-4'>Terms of Conditions</span></p>
            
        </div>

        </div>
      </main>
    )
}

export default Footer