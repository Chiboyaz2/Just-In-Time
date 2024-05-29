import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className='p-6 contact w-full lg:p-14' id='contact'>
            <div className='contact-content w-full flex flex-col gap-4 md:flex-row md:items-start'>
                <motion.form
                    ref={formRef}
                    className='flex flex-col gap-4 w-full text-[#8E8E8E] md:w-1/2 items-start md:justify-between'
                    initial={{ y: '100%', opacity: 0 }}
                    animate={textInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <div className='w-full flex flex-col gap-4 md:flex-row'>
                        <input
                            type='text'
                            name=''
                            id=''
                            placeholder='Name'
                            className='w-full p-3 outline-0 md:w-1/2'
                        />
                        <input
                            type='email'
                            name=''
                            id=''
                            placeholder='Email'
                            className='w-full p-3 outline-0 md:w-1/2'
                        />
                    </div>

                    <textarea
                        name=''
                        id=''
                        placeholder='Message'
                        className='w-full p-3 outline-0 h-28'
                    ></textarea>

                    <button className='p-3 w-1/3 bg-[#2F7F93] text-white font-medium tracking-wider uppercase'>
                        Send
                    </button>
                </motion.form>

                <motion.div
                    ref={textRef}
                    className='flex w-full flex-col gap-3 text-white mt-4 items-center tracking-wider md:w-1/2 md:items-start md:p-4'
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={textInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <p className='text-xl uppercase font-semibold'>Get in touch</p>

                    <p className='text-sm text-center md:text-start leading-6'>
                        Whether you have questions or are ready to get started with our services, we’re just a call or message away. Get in touch with us now.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
