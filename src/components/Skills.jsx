import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Trigger animation when half of the component is in view
    });

    const slideInRight = {
        hidden: { x: '200', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1, 
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    const popInTop = {
        hidden: { y: '-50%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className='skills tracking-wider'>
            <div className='skills-content text-white flex flex-col md:flex-row md:justify-between md:items-center'>
                {/* Slide in from right animation */}
                <motion.div
                    className='w-full flex flex-col bg-[#2F7F93] md:w-1/2 px-6 pt-14 pb-28 one-end text-xl uppercase gap-4 font-semibold tracking-wider lg:w-1/3'
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={slideInRight}
                >
                    <p>Trusted Accounting Experts for Your Business Success</p>
                    <div className='w-20 h-1 bg-white'></div>
                </motion.div>

                {/* Pop in from top animation */}
                <motion.div
                    className='w-full gap-6 flex flex-col items-start px-6 py-14 md:w-1/2 xl:pr-20'
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={popInTop}
                >
                    <p className='font-medium'>
                        With decades of combined experience, JiT Accountants excels in providing tailored financial solutions. We serve a diverse range of clients across England and Wales, ensuring top-notch service and wise counsel to help your business achieve maximum profitability and sustainability.
                    </p>

                    <div className='w-full flex flex-col gap-4'>
                        {/* Progress bars */}
                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold text-xl'>
                                <p>Client Satisfaction</p>
                                <p>95%</p>
                            </div>
                            <div className='w-full h-1 bg-white rounded-md'>
                                <motion.div
                                    className='w-[95%] h-full bg-[#2F7F93] rounded-l-md'
                                    initial={{ width: 0 }}
                                    animate={{ width: '95%' }}
                                    transition={{ duration: 2, delay: 1 }}
                                ></motion.div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold text-xl'>
                                <p>Expertise</p>
                                <p>100%</p>
                            </div>
                            <div className='w-full h-1 bg-white rounded-md'>
                                <motion.div
                                    className='w-[100%] h-full bg-[#2F7F93] rounded-l-md'
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2, delay: 1.2 }}
                                ></motion.div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold text-xl'>
                                <p>Service Quality</p>
                                <p>97%</p>
                            </div>
                            <div className='w-full h-1 bg-white rounded-md'>
                                <motion.div
                                    className='w-[97%] h-full bg-[#2F7F93] rounded-l-md'
                                    initial={{ width: 0 }}
                                    animate={{ width: '97%' }}
                                    transition={{ duration: 2, delay: 1.4 }}
                                ></motion.div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between uppercase tracking-wider font-semibold text-xl'>
                                <p>Reliability</p>
                                <p>94%</p>
                            </div>
                            <div className='w-full h-1 bg-white rounded-md'>
                                <motion.div
                                    className='w-[94%] h-full bg-[#2F7F93] rounded-l-md'
                                    initial={{ width: 0 }}
                                    animate={{ width: '94%' }}
                                    transition={{ duration: 2, delay: 1.6 }}
                                ></motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
