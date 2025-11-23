import React from 'react'
import { footerIconsList } from '../constants'

const Footer = () => {
  return (
    <div className="overflow-x-hidden w-full flex items-center flex-col md:gap-10 gap-7 bg-black-300 py-10 md:mt-20">

                
      <div className='flex items-center md:gap-16 gap-8'>
        <img src="/images/logo.png" alt="logo"className='w-10 h-10 object-cover object-center' />
        {
          footerIconsList.map((icon,index)=>(
            <div key={index} className='cursor-pointer hover:-translate-y-5 transition-all duration-700'>
              <a href={icon.href} target='_blank'>
                 <img src={icon.icon} alt={icon.name} className='md:size-10 size-8' />
              </a>
             
            </div>  
          ))
        }
      </div>
      <p className='font-regular md:text-lg text-sm'>2025 &#169; All rights reserved.</p>
    </div>
  )
}

export default Footer