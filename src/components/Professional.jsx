import React from 'react'
import PIC1 from '../images/pic-1.jpg'
import PIC2 from '../images/pic-2.jpg'
import PIC3 from '../images/pic-3.jpg'
import PIC4 from '../images/pic-4.jpg'

const Professional = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-6 items-center text-center lg:p-14'>
            <p className='italic text-[#1F5961] font-semibold tracking-wider'>
            Meet Our Team
            </p>

            <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
            Our Professional Team
            </p>

            <p className='text-[#8F90A4] tracking-wider text-sm lg:w-1/2'>
            Our team is made up of passionate and talented professionals who 
            are dedicated to delivering exceptional results. Each member brings 
            their own expertise and experience to the table.
            </p>

            <div className='grid grid-cols-1 w-full gap-4
            md:grid-cols-2 mt-6 xl:grid-cols-4'>
                <div className='shadow-xl shadow-gray-700 p-8 rounded-md w-full gap-3 items-center flex flex-col h-96 justify-between
                transition-transform duration-500 hover:transform hover:-translate-y-5'>
                    <img src={PIC1} alt="" className='w-40 h-40 rounded-full'/>

                    <div className='xl:h-1/3 flex flex-col gap-1'>
                        <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                        MG FAROOQUE
                        </p>

                        <p className='capitalize text-[#32646C] tracking-wider text-sm'>
                        Chairperson
                        </p>
                    </div>
                </div>

                <div className='shadow-xl shadow-gray-700 p-8 rounded-md w-full gap-3 items-center flex flex-col h-96 justify-between
                transition-transform duration-500 hover:transform hover:-translate-y-5'>
                    <img src={PIC2} alt="" className='w-40 h-40 rounded-full'/>

                    <div className='xl:h-1/3 flex flex-col gap-1'>
                        <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                        Peter parvez
                        </p>

                        <p className='capitalize text-[#32646C] tracking-wider text-sm'>
                        Managing Director
                        </p>
                    </div>
                </div>

                <div className='shadow-xl shadow-gray-700 p-8 rounded-md w-full gap-3 items-center flex flex-col h-96 justify-between
                transition-transform duration-500 hover:transform hover:-translate-y-5'>
                    <img src={PIC3} alt="" className='w-40 h-40 rounded-full'/>

                    <div className='xl:h-1/3 flex flex-col gap-1'>
                        <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                        Humaira Farooque
                        </p>

                        <p className='capitalize text-[#32646C] tracking-wider text-sm'>
                        Secratary & HR Director
                        </p>
                    </div>
                </div>

                <div className='shadow-xl shadow-gray-700 p-8 rounded-md w-full gap-3 items-center flex flex-col h-96 justify-between
                transition-transform duration-500 hover:transform hover:-translate-y-5'>
                    <img src={PIC4} alt="" className='w-40 h-40 rounded-full'/>

                    <div className='xl:h-1/3 flex flex-col gap-1'>
                        <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                        MG Rezwanul Farooque
                        </p>

                        <p className='capitalize text-[#32646C] tracking-wider text-sm '>
                        Customer Care & Director
                        </p>
                    </div>
                </div>
            </div>

            <button className='bg-[#2C7789] mt-6 px-6 py-3 text-white font-medium uppercase tracking-wider
            md:mt-8 lg:mt-10'>
                view all team
            </button>
        </div>
    )
}

export default Professional
