import React from 'react'

const Team = () => {
    return (
        <div className='p-6  w-full flex flex-col gap-4 
        md:flex-row lg:p-14'>
           <div className='team-one px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-one-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Tailored Security Solutions
                    </p>

                    <p className='font-medium'>
                    Our team of experts can design and implement a security plan that fits your specific requirements.
                    </p>
                </div> 
           </div>

           <div className='team-two px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-two-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Professional Team
                    </p>

                    <p className='font-medium'>
                    With five years of experience in the industry, 
                    G10 Security Services has a team of highly 
                    skilled and trained professionals who are experts in their field.
                    </p>
                </div> 
           </div>

           <div className='team-three px-6 py-14 flex flex-col text-white tracking-wider
           md:py-6 md:w-1/3'>
                <div className='team-three-content flex flex-col gap-3'>
                    <p className='mt-16 text-xl uppercase font-semibold'>
                    Cutting-Edge Technology
                    </p>

                    <p className='font-medium'>
                    G10 Security Services is committed to staying at 
                    the forefront of technology to provide the most 
                    advanced and effective solutions.
                    </p>
                </div> 
           </div>
        </div>
    )
}

export default Team
