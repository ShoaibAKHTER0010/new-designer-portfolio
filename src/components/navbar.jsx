
'use client'
import React, { useState } from 'react';


const Navbar = () => {
    let Links =[
      {name:"Projects",link:"/"},
      {name:"Journey",link:"/"},
      {name:"Service",link:"/"},
      {name:"Contact",link:"/"},
    
     
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full  sticky top-0 z-50  backdrop-blur-lg   left-0'>
      <div className='md:flex items-center justify-between bg-transparent  md:px-16 px-2'>
      <div className="text-gray-900 text-[22px] font-medium font-['DM Sans'] underline leading-[24px] md:leading-[30px] flex gap-3 py-4 md:py-0"><img src="./images/mail.png" alt="img-1" className='inline' /><h2 className='py-3'> hi@arif.interactive</h2></div>
      <div className='hidden lg:flex'> <img src="./images/Logo-1.png" alt="img-2" /></div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       
      <ion-icon name={open ? 'close':'grid-outline'}></ion-icon>
      </div>

<div className=''>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
      bg-white md:bg-transparent w-full pl-14 shadow-lg md:shadow-sm md:pl-8 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className=" md:my-0 my-7 text-gray-600 text-lg font-normal font-['DM Sans'] md:text-base px-0 md:px-8  ">
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      
      </ul>
      </div>

      </div>
    </div>
  )
}

export default Navbar