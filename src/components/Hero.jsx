import React, { useState, useEffect } from 'react';
import Logo from '../images/logo1.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from './Navbar';

const Hero = () => {
    const [heroClass, setHeroClass] = useState('hero2');
    const [contentClass, setContentClass] = useState('hero2-content');

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroClass(prevClass => (prevClass === 'hero2' ? 'hero1' : 'hero2'));
            setContentClass(prevClass => (prevClass === 'hero2-content' ? 'hero1-content' : 'hero2-content'));
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='flex flex-col gap-6 w-full tracking-wider'>
           <div className='w-full flex items-center justify-between p-6 lg:px-14'>
               <img src={Logo} alt="" className='w-40 h-40'/>

                <div className='hidden md:flex items-center gap-8'>
                    <div className='flex gap-3'>
                        <div className='w-14 h-14 bg-[#2F7F93] flex items-center justify-center text-white'>
                            <LocalPhoneIcon />
                        </div>

                        <div className='flex flex-col gap-1 '>
                            <p className='text-[#292929] '>
                            On-Call Service 24/7
                            </p>

                            <p className='font-semibold'>
                            08000016701
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='w-14 h-14 bg-[#2F7F93] flex items-center justify-center text-white'>
                            <EmailIcon />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='text-[#292929] '>
                            Email Address
                            </p>

                            <p className='font-semibold '>
                            info@g10securityservices.co.uk
                            </p>
                        </div>
                    </div>
                </div>
           </div> 

           <div className={`${heroClass} px-6 py-20 text-white lg:px-14 xl:py-32 relative`}>
                <div className='absolute top-[-30px] left-[20px] bg-[#000] z-20 w-11/12
                lg:left-[40px] xl:left-[60px]'>
                    <Navbar />
                </div>

                <div className={`${contentClass} flex flex-col items-center gap-6 text-center 
                md:items-start md:text-start md:w-1/2`}>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='w-20 h-[2px] bg-[#2F7F93] rounded'></div>
                        <p className='text-[#2F7F93] italic font-semibold'>
                        Safety and Security
                        </p>
                    </div>

                    <p className='uppercase text-2xl font-semibold lg:text-4xl xl:text-5xl leading-7'>
                    Working together for your Business
                    </p>

                    <p className='font-medium'>
                    The premier security services company with over five years of experience in safeguarding businesses and individuals
                    </p>

                    <button className='px-6 py-3 bg-[#2F7F93] uppercase font-medium'>
                        Learn More
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Hero;
