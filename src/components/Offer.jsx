import React from 'react'

const Offer = () => {
    return (
        <div className='px-6 py-14 offer tracking-wider lg:p-14 lg:py-28'>
            <div className='offer-content text-white flex flex-col
            md:flex-row md:justify-between md:items-center'> 
                <div className='md:w-1/2'></div>
                <div className='w-full gap-6 flex flex-col items-start 
                md:w-1/2 xl:pr-20'>
                    <p className='text-2xl font-semibold uppercase
                    xl:text-3xl'>
                    CORE VALUE
                    </p>

                   <ul className='grid grid-cols-2 gap-2  text-lg font-medium lg:gap-3 xl:gap-6'>
                    <li className='list-disc ml-3'>
                    Customer Centeredness
                    </li>
                    <li className='list-disc ml-3'>
                    Accuracy and Probity
                    </li>
                    <li className='list-disc ml-3'>
                    Timeliness
                    </li>
                    <li className='list-disc ml-3'>
                    Ethical standards
                    </li>
                   </ul>

                    <a href='#offer' className='py-3 px-6 bg-[#2F7F93] font-medium uppercase'>
                        What We Offer
                    </a>
                </div>
            </div>
           
        </div>
    )
}

export default Offer
