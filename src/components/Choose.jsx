import React, { useEffect, useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Man from '../images/Bookkeeping-1.png';
import Woman from '../images/Business-Planning-Budgeting-Forecasting-1.png';
import { motion, useInView } from 'framer-motion';

const Choose = () => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const duration = 5 * 1000; // 5 seconds
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

    const slideLeftAnimation = {
        hidden: { x: '-100%' },
        visible: {
            x: 0,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    };

    const popTopAnimation = {
        hidden: { y: '-50%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    };

    const popBottomAnimation = {
        hidden: { y: '50%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    };

    return ( 
        <div ref={ref} className='flex flex-col-reverse gap-6 p-6 mb-10 lg:p-14 xl:flex-row xl:items-center'>
            <motion.div
                className='w-full flex flex-col gap-6 md:flex-row md:items-center xl:w-1/2'
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={slideLeftAnimation}
            >
                <motion.img
                    src={Woman}
                    alt=""
                    className='w-full md:w-1/2'
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={slideLeftAnimation}
                />

                <motion.div
                    className='relative w-full md:w-1/2 lg:h-[600px] xl:h-[450px]'
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={popTopAnimation}
                >
                    <motion.img
                        src={Man}
                        alt=""
                        className='lg:h-full w-full'
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={popTopAnimation}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className='flex flex-col gap-3 xl:w-1/2'
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={popBottomAnimation}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-14 h-[2px] bg-[#2F7F93] rounded-lg'></div>
                    <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                        Why Choose Us
                    </p>
                </div>

                <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                    Expert Financial Solutions Tailored to Your Needs
                </p>

                <p className='text-[#7E7E7E] tracking-wider font-medium w-full'>
                    At JiT Accountants, we are committed to delivering exceptional accounting services that cater to the specific needs of each client. Our goal is to help you achieve maximum profitability through personalized and trustworthy financial solutions. Here are six key reasons to choose us:
                </p>

                <div className='grid grid-cols-1 gap-2 text-[#292929] pb-4 border-b border-[#292929] md:grid-cols-2'>
                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Customized Service</p>
                    </motion.div>

                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Extensive Experience</p>
                    </motion.div>

                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Client-Centric Approach</p>
                    </motion.div>

                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Comprehensive Offerings</p>
                    </motion.div>

                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Trusted Advisors</p>
                    </motion.div>

                    <motion.div
                        className='flex items-center gap-1'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1, delay: 1.0 }}
                    >
                        <CheckOutlinedIcon />
                        <p>Time Efficiency</p>
                    </motion.div>
                </div>

                <p className='text-xs font-semibold'>
                    GOT QUESTIONS? YOU CAN CONTACT US{' '}
                    <a href='#contact' className='ml-1 text-[#3694AF]'>HERE.</a>
                </p>
            </motion.div>
        </div>
    );
};

export default Choose;
