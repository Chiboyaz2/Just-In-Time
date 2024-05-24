import React, { useEffect, useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import Woman from '../images/woman.jpg'

const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 5 * 1000; // 10 seconds
        const targetCount = 5;
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
                
                <div className='relative w-full md:w-full xl:h-[500px]'>
                    <img src={Woman} alt="" className='lg:h-full w-full'/>

                    <div className='absolute right-[-15px] top-[-15px] shadow-xl shadow-gray-700 bg-white py-3 px-6
                    flex flex-col gap-1 items-center'>
                        <p className='text-[#1F5961] text-3xl     
                        font-semibold tracking-wider'>
                            <span>{count}</span>
                            <span>+</span>
                        </p>

                        <p className='text-[#292929] font-medium  tracking-wider uppercase text-center'>
                          YEARS OF EXPERIENCE
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-3 xl:w-1/2'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-14 h-[2px] bg-[#2F7F93] rounded-lg'>

                    </div>
                    <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                    About Us
                    </p>
                </div>

                <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                Specifically designed to help businesses thrive
                </p>

                <p className='text-[#7E7E7E] tracking-wider font-medium lg:w-1/2'>
                G10 Security Services is a new security services company with a 
                fresh approach to protecting people and businesses. 
                With our experience and innovative solutions, 
                we are poised to be a leader in the industry.
                </p>

                <div className='mt-3  flex w-full flex-col gap-3 border-l border-[#292929]
                md:flex-row md:border-l-0 md:border-t'>
                  <div className='flex gap-3 p-3  md:py-5'>
                    <div className='flex items-center justify-center bg-[#2F7F93] w-32 h-10 text-white'>
                      <RemoveRedEyeOutlinedIcon />
                    </div>

                    <div className='flex flex-col gap-1 text-[#292929]'>
                      <p className='text-xl font-semibold uppercase tracking-wider'>
                      Vision
                      </p>

                      <p className='font-medium'>
                      To continuously innovate and improve our 
                      services to meet the evolving needs of our customers.
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-3 px-3 py-5 border-t border-[#292929]
                  md:border-t-0 md:border-l md:p-5'> 
                    <div className='flex items-center justify-center bg-[#2F7F93] w-28 h-10 text-white'>
                      <CrisisAlertOutlinedIcon />
                    </div>

                    <div className='flex flex-col gap-1 text-[#292929]'>
                      <p className=' text-xl font-semibold uppercase tracking-wider'>
                      Mission
                      </p>

                      <p className='font-medium'>
                      To be a leader in our industry by consistently
                      exceeding customer expectations.
                      </p>
                    </div>
                  </div>
                </div>

                <button className='py-3  bg-[#2F7F93] text-white font-medium uppercase w-1/2 mt-3 
                md:w-1/4 xl:w-1/3'>
                  discover more 
                </button>
            </div>
        </div>
    )
}

export default About
