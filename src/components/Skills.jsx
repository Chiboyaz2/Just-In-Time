import React from 'react'

const Skills = () => {
    return (
        <div className=' skills tracking-wider'>
            <div className='skills-content text-white flex flex-col
            md:flex-row md:justify-between md:items-center'> 
                <div className='w-full flex flex-col bg-[#2F7F93]
                md:w-1/2 px-6 pt-14 pb-28 one-end text-xl uppercase gap-4 font-semibold tracking-wider
                lg:w-1/3'>
                    <p>
                        we are experienced in prodiving you security
                    </p>

                    <div className='w-20 h-1 bg-white'>

                    </div>
                </div>

                <div className='w-full gap-6 flex flex-col items-start px-6 py-14
                md:w-1/2 xl:pr-20'>
                    
                    <p className='font-medium'>
                    With years of experience under our belt, we’ve honed our skills 
                    to become experts in the security field. We know what it takes to 
                    keep you and your property safe, and we’re committed to doing just that.
                    </p>

                    <div className='w-full flex flex-col gap-4'>
                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold
                            text-xl'>
                                <p>
                                Equipment
                                </p>

                                <p>
                                90%
                                </p>
                            </div>

                            <div className='w-full h-1 bg-white rounded-md'>
                                <div className='w-[90%] h-full bg-[#2F7F93] rounded-l-md'>

                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold
                            text-xl'>
                                <p>
                                Security
                                </p>

                                <p>
                                75%
                                </p>
                            </div>

                            <div className='w-full h-1 bg-white rounded-md'>
                                <div className='w-[75%] h-full bg-[#2F7F93] rounded-l-md'>

                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold
                            text-xl'>
                                <p>
                                Experience
                                </p>

                                <p>
                                80%
                                </p>
                            </div>

                            <div className='w-full h-1 bg-white rounded-md'>
                                <div className='w-[80%] h-full bg-[#2F7F93] rounded-l-md'>

                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold
                            text-xl'>
                                <p>
                                Protection
                                </p>

                                <p>
                                60%
                                </p>
                            </div>

                            <div className='w-full h-1 bg-white rounded-md'>
                                <div className='w-[60%] h-full bg-[#2F7F93] rounded-l-md'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Skills
