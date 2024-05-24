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
                    Professional security with reliable service
                    </p>

                    <p className='font-medium'>
                    At G10 Security Services, we believe that professional 
                    security should be about more than just protecting your business. 
                    That’s why we take a holistic approach, providing a range of services 
                    that are tailored to meet your unique needs and ensure your complete peace of mind. 
                    </p>

                    <button className='py-3 px-6 bg-[#2F7F93] font-medium uppercase'>
                        What We Offer
                    </button>
                </div>
            </div>
           
        </div>
    )
}

export default Offer
