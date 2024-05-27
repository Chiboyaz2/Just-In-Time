import React from 'react'
import ICAN from '../images/ican.png'
import ICAEW from '../images/ICAEW.webp'

const Affilate = () => {
    return (
        <div className='p-6 flex flex-col gap-4 items-center lg:p-14'>
           <p className='text-2xl font-semibold tracking-wider uppercase pb-3'>
            Affiliate 
           </p>

           <div className='flex flex-col gap-3 w-full 
           lg:flex-row'>
            <img src={ICAN} alt="" className='lg:w-1/2'/>
            <img src={ICAEW} alt="" className='lg:w-1/2'/>
           </div>
        </div>
    )
}

export default Affilate
