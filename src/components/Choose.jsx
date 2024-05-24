import React, { useEffect, useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Man from '../images/man-suit.jpg'
import Woman from '../images/woman.jpg'

const Choose = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 15 * 1000; // 10 seconds
        const targetCount = 135;
        const intervalTime = duration / targetCount;
        
        let currentCount = 1;
        const interval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);
            if (currentCount === targetCount) {
                clearInterval(interval);
            }
        }, intervalTime);
        
        return () => clearInterval(interval);
    }, []);

    return ( 
        <div className='flex flex-col-reverse gap-6 p-6 mb-10 lg:p-14
        xl:flex-row xl:items-center'>
            <div className='w-full flex flex-col gap-6 
            md:flex-row md:items-center xl:w-1/2'>
                <img src={Man} alt="" className='w-full md:w-1/2'/>

                <div className='relative w-full md:w-1/2 lg:h-[600px] xl:h-[450px]'>
                    <img src={Woman} alt="" className='lg:h-full w-full'/>

                    <div className='absolute right-10 bottom-[-25px] shadow-xl shadow-gray-700 bg-white py-3 px-6
                    flex flex-col gap-1 items-center'>
                        <p className='text-[#1F5961] text-3xl     
                        font-semibold tracking-wider'>
                            <span>{count}</span>
                            <span>+</span>
                        </p>

                        <p className='text-[#292929] font-medium  tracking-wider uppercase text-center'>
                            professional guards
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-3 xl:w-1/2'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-14 h-[2px] bg-[#2F7F93] rounded-lg'>

                    </div>
                    <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                    Why Choose Us
                    </p>
                </div>

                <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                Dedicated team with prompt response
                </p>

                <p className='text-[#7E7E7E] tracking-wider font-medium lg:w-1/2'>
                At G10 Security Services, we pride ourselves on 
                delivering exceptional customer service. 
                We work closely with our clients to understand their 
                unique needs and requirements, and tailor our services accordingly.
                </p>

                <div className='grid grid-cols-1 gap-2 text-[#292929] pb-4 border-b border-[#292929]
                md:grid-cols-2'>
                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        Risk Management
                        </p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        Protective Services
                        </p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        Executive Protection
                        </p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        Integrity
                        </p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        Security Booth
                        </p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CheckOutlinedIcon />
                        <p>
                        24/7 Support
                        </p>
                    </div>
                </div>

                <p className='text-xs font-semibold'>
                GOT QUESTIONS? YOU CAN CONTACT US 
                <span className='ml-1 text-[#3694AF]'>
                HERE.
                </span>
                </p>
            </div>
        </div>
    )
}

export default Choose
