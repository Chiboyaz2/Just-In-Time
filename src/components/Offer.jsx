import React from 'react';
import { motion, useInView } from 'framer-motion';

const Offer = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const dropAnimation = {
        y: [-50, 0],
        opacity: [0, 1],
        transition: {
            duration: 1.9,
            ease: 'easeInOut'
        }
    };

    return (
        <div ref={ref} className='px-6 py-14 offer tracking-wider lg:p-14 lg:py-28'>
            {isInView && (
                <motion.div
                    className='offer-content text-white flex flex-col md:flex-row md:justify-between md:items-center'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                >
                    <div className='md:w-1/2'></div>
                    <div className='w-full gap-6 flex flex-col items-start md:w-1/2 xl:pr-20'>
                        <motion.p
                            className='text-2xl font-semibold uppercase xl:text-3xl'
                            animate={dropAnimation}
                        >
                            CORE VALUE
                        </motion.p>
                        <motion.ul
                            className='grid grid-cols-2 gap-2 text-lg font-medium lg:gap-3 xl:gap-6'
                            animate={dropAnimation}
                        >
                            <li className='list-disc ml-3'>
                                Customer Centeredness
                            </li>
                            <li className='list-disc ml-3'>
                                Accuracy and Probity
                            </li>
                            <li className='list-disc ml-3'>
                                Timeliness
                            </li>
                            <li className='list-disc ml-3'>
                                Ethical standards
                            </li>
                        </motion.ul>
                        <motion.a
                            href='#offer'
                            className='py-3 px-6 bg-[#2F7F93] font-medium uppercase'
                            animate={dropAnimation}
                        >
                            What We Offer
                        </motion.a>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Offer;
