import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const form = useRef();
    const [buttonLabel, setButtonLabel] = useState('Send');

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Capture form data
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Log form data to console
        console.log('Form Data:', data);

        emailjs
            .sendForm('service_sdjs8hg', 'template_ywpmdya', form.current, {
                publicKey: 'YIrvhDKiGhlXlcOGE',
            })
            .then(
                () => {
                    setButtonLabel('SUCCESS!'); // Change button label to SUCCESS
                    setTimeout(() => {
                        form.current.reset(); // Reset the form after 1 second
                        setButtonLabel('Send'); // Reset button label to Send
                    }, 1000);
                },
                (error) => {
                    setButtonLabel('Failed...'); // Change button label to Failed
                    console.log('FAILED...', error.text);
                    setTimeout(() => {
                        setButtonLabel('Send'); // Reset button label to Send
                    }, 1000);
                },
            );
    };

    return (
        <div className='p-6 contact w-full lg:p-14' id='contact'>
            <div className='contact-content w-full flex flex-col gap-4 md:flex-row md:items-start'>
                <motion.form
                    ref={form} onSubmit={sendEmail}
                    className='flex flex-col gap-4 w-full text-[#8E8E8E] md:w-1/2 items-start md:justify-between'
                    initial={{ y: '100%', opacity: 0 }}
                    animate={textInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <div className='w-full flex flex-col gap-4 md:flex-row'>
                        <input
                            type='text'
                            name="name"
                            placeholder='Name'
                            className='w-full p-3 outline-0 md:w-1/2'
                        />
                        <input
                            type='email'
                            name="email"
                            placeholder='Email'
                            className='w-full p-3 outline-0 md:w-1/2'
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder='Message'
                        className='w-full p-3 outline-0 h-28'
                    ></textarea>

                    <input type="submit" value={buttonLabel}
                    className='p-3 w-1/3 bg-primary-color text-white font-medium tracking-wider uppercase cursor-pointer' />
                        
                </motion.form>

                <motion.div
                    ref={textRef}
                    className='flex w-full flex-col gap-3 text-white mt-4 items-center tracking-wider md:w-1/2 md:items-start md:p-4'
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={textInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <p className='text-2xl uppercase font-semibold'>Get in touch</p>

                    <p className='text-primary-size text-center md:text-start leading-6'>
                        Whether you have questions or are ready to get started with our services, we’re just a call or message away. Get in touch with us now.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
