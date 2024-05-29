import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

import ICAN from '../images/ican.png';
import ICAEW from '../images/ICAEW.webp';

const Affilate = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // When 50% of the element is in view
    });

    return (
        <div className='p-6 bg-[#DCEDFE] flex flex-col gap-4 items-center lg:p-14 md:flex-row'>
            <motion.p
                ref={ref}
                className='text-lg font-medium tracking-wider uppercase pb-3 text-[#051d40] italic md:w-1/2 leading-9'
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 5, ease: 'easeInOut' }}
            >
                We are proud members of the{' '}
                <span className='text-semibold text-2xl ml-1 mr-1'>ICAEW</span> and{' '}
                <span className='text-semibold text-2xl ml-1 mr-1'>ICAN</span> list of authorised accountancy practices
            </motion.p>

            <div className='flex flex-row gap-3 w-full md:w-1/2'>
                <motion.img
                    src={ICAN}
                    alt='ICAN'
                    className='w-32 h-16 lg:w-40 lg:w-20'
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 5, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.img
                    src={ICAEW}
                    alt='ICAEW'
                    className='w-48 h-16 lg:w-60 lg:w-20'
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 5, ease: 'easeInOut', delay: 0.5 }}
                />
            </div>
        </div>
    );
};

export default Affilate;
