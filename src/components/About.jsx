import React, { useEffect, useState, useRef } from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import aboutUs from '../images/force/post-1.jpg';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 8 * 1000; // 8 seconds
            const targetCount = 30;
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
        }
    }, [isInView]);

    const bounceAnimation = {
        y: [0, -20, 0], // bounce effect
        transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: 3, // total 5 seconds since duration is 0.5s and it repeats 9 times
            repeatType: 'loop'
        }
    };

    const popAnimation = {
        y: [200, 0],
        opacity: [0, 1],
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    };

    return (
        <div ref={ref} className='flex flex-col-reverse gap-6 p-6 mb-10 lg:p-14 xl:flex-row xl:items-center' id='about-us'>
            {isInView && (
                <motion.div
                    className='w-full flex flex-col gap-6 md:flex-row md:items-center xl:w-1/2'
                    animate={bounceAnimation}
                >
                    <div className='relative w-full md:w-full xl:h-[500px]'>
                        <img src={aboutUs} alt="" className='lg:h-full w-full' />

                        <div className='absolute right-[-15px] top-[-15px] shadow-xl shadow-gray-700 bg-white py-3 px-6 flex flex-col gap-1 items-center'>
                            <p className='text-primary-color text-3xl font-semibold tracking-wider'>
                                <span>{count}</span>
                                <span>+</span>
                            </p>

                            <p className='text-[#292929] font-medium tracking-wider uppercase text-center'>
                                YEARS OF EXPERIENCE
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {isInView && (
                <motion.div
                    className='flex flex-col gap-3 xl:w-1/2'
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='w-14 h-[2px] bg-[#2F7F93] rounded-lg'></div>
                        <p className='italic text-primary-color text-primary-size font-semibold tracking-wider'>About Us</p>
                    </div>

                    <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                    EXPERT IN ADDING VALUES FOR BUSINESS SUCCESS
                    </p>

                    <p className='text-[#000] text-primary-size tracking-wider font-medium'>
                        We are a team of highly qualified, committed, and professional chartered accountants with over 30 years of cumulative experience. We offer a wide range of accounting, tax, and business advising services to help our clients navigate the complex financial landscape of today's corporate environment. Our main goal is to deliver timely and exceptional high-quality service in order to meet the demands of our Stakeholders.
                        <br />
                        We take great pleasure in establishing and maintaining dependable connections with our clients that allow them to succeed and increase the value of their businesses through timely and personalised advice.
                        <br />
                        Our clientele spans the whole of England which are Small and Medium Scale Enterprises. We are dedicated to offering top-notch service that is customised to meet each client's unique demands.
                        <br />
                        You can be rest assured that JiT accountants will provide you with wise counsel that will add value the sustainability of your business.
                    </p>

                    <div className='mt-3 flex w-full flex-col gap-3 border-l border-[#292929] md:flex-row md:border-l-0 md:border-t'>
                        <div className='flex gap-3 p-3 md:py-5'>
                            <div className='flex items-center justify-center bg-primary-color w-32 h-10 text-white'>
                                <RemoveRedEyeOutlinedIcon />
                            </div>

                            <div className='flex flex-col gap-1 text-[#292929]'>
                                <p className='text-xl font-semibold uppercase tracking-wider'>
                                    Vision statement
                                </p>

                                <p className='font-medium text-primary-size'>
                                    To be recognized as global accounting service with timely response to clients’ needs.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-3 px-3 py-5 border-t border-[#000] md:border-t-0 md:border-l md:p-5'>
                            <div className='flex items-center justify-center bg-primary-color w-28 h-10 text-white'>
                                <CrisisAlertOutlinedIcon />
                            </div>

                            <div className='flex flex-col gap-1 text-[#000]'>
                                <p className=' text-xl font-semibold uppercase tracking-wider'>
                                    STATEMENT OF PURPOSE
                                </p>

                                <p className='font-medium text-primary-size'>
                                    Adding value to clients’ businesses through timely provision of trusted professional services that will exceed the expectations of our stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <button className='py-3  bg-[#2F7F93] text-white font-medium uppercase w-1/2 mt-3 
                md:w-1/4 xl:w-1/3'>
                  discover more 
                </button> */}
                </motion.div>
            )}
        </div>
    );
};

export default About;
