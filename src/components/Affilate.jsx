import React from 'react'
import ICAN from '../images/ican.png'
import ICAEW from '../images/ICAEW.webp'

const Affilate = () => {
    return (
        <div className='p-6 bg-[#DCEDFE] flex flex-col gap-4 items-center lg:p-14
        md:flex-row '>
           <p className='text-lg font-medium tracking-wider uppercase pb-3 text-[#051d40] italic
           md:w-1/2 leading-9'>
           We are proud members of the <span className='text-semibold text-2xl ml-1 mr-1'>ICAEW</span >and<span className='text-semibold text-2xl ml-1 mr-1'>ICAN</span>list of authorised accountancy practices
           </p>

           <div className='flex flex-row gap-3 w-full md:w-1/2'>
            <img src={ICAN} alt="" className='w-32 h-16 lg:w-40 lg:w-20'/>
            <img src={ICAEW} alt="" className='w-48 h-16 lg:w-60 lg:w-20'/>
           </div>
        </div>
    )
}

export default Affilate
