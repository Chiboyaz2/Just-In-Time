import React from 'react'

const Team = () => {
    return (
        <div className='p-6  w-full flex flex-col gap-4 
        md:flex-row lg:p-14'>
           <div className='team-one px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-one-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Customized Financial Expertise
                    </p>

                    <p className='font-medium'>
                    JiT Accountants is an independent firm of chartered accountants dedicated to helping you and your company achieve the highest level of profitability. We offer trusted and tailored solutions to meet the unique demands of our diverse clientele, ensuring top-notch service across England and Wales.
                    </p>
                </div> 
           </div>

           <div className='team-two px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-two-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Comprehensive Accounting Services
                    </p>

                    <p className='font-medium'>
                    Serving Small and Medium Scale Enterprises across England and Wales, JiT Accountants provides a wide range of services customized to your needs. Whether you are a start-up, an established firm, or a sole proprietor, we handle all complex tax and accounting matters, letting you focus on your core business activities.
                    </p>
                </div> 
           </div>

           <div className='team-three px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-three-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Trusted Financial Advisors
                    </p>

                    <p className='font-medium'>
                    At JiT Accountants, our success is built on providing better options and wise counsel to our clients. With a growing clientele based primarily on recommendations, we ensure that our personalized services add value and sustainability to your business, no matter your industry or business size.
                    </p>
                </div> 
           </div>
        </div>
    )
}

export default Team
