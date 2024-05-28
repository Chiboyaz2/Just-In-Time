import React, { useState, useEffect } from 'react';
import Logo from '../images/LLL.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from './Navbar';

const Hero = () => {
    const [heroClass, setHeroClass] = useState('hero2');
    const [contentClass, setContentClass] = useState('hero2-content');
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    const paragraphs = [
        "JiT Accountants is an independent firm of chartered accountants who is dedicated to helping you and your company achieve the highest level of profitability. The ability to provide trusted and better options to our clients is the foundation of our success.",
        "Our clientele spans the whole of England and Wales. These are Small and Medium Scale Enterprises. We are dedicated to offering top-notch service that is customised to meet each client's unique demands.",
        "Our clientele is growing primarily because of recommendations from previous customers.",
        "We offer a wide range of services that are customised to meet your needs, regardless of whether you are a start-up, an established firm, a freelancer, contractor, consultant, landlord, a sole proprietor, partnership or corporate.",
        "We recognise how essential your time is, therefore let us handle the complicated tax related matters and accounting.",
        "You can be rest assured that JiT accountants will provide you with wise counsel that will add value the sustainability of your business."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroClass(prevClass => (prevClass === 'hero2' ? 'hero1' : 'hero2'));
            setContentClass(prevClass => (prevClass === 'hero2-content' ? 'hero1-content' : 'hero2-content'));
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        const paragraphInterval = setInterval(() => {
            setCurrentParagraph(prevParagraph => (prevParagraph + 1) % paragraphs.length);
        }, 5000);

        return () => clearInterval(paragraphInterval); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            const navbar = document.getElementById('navbar');
            if (hero && navbar) {
                const heroRect = hero.getBoundingClientRect();
                setIsSticky(heroRect.bottom <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='flex flex-col gap-1 w-full tracking-wider' id='hero'>
            {/* <div className='w-full flex items-center justify-between p-6 lg:px-14'>
                <img src={Logo} alt="" className='w-40'/>

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
                            +447448319130
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
                            info@jitaccountants.co.uk
                            </p>
                        </div>
                    </div>
                </div>
            </div>  */}
            

            <div className={`${heroClass} px-6 py-20 text-white lg:px-14 xl:py-32 relative`}>
                

                <div className={`${contentClass} flex flex-col items-center gap-6 text-center 
                md:items-start md:text-start md:w-1/2`}>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='w-20 h-[2px] bg-[#2F7F93] rounded'></div>
                        <p className='text-[#2F7F93] italic font-semibold'>
                        Just In Time Accountants
                        </p>
                    </div>

                    <p className='uppercase text-2xl font-semibold lg:text-4xl xl:text-5xl leading-7'>
                    Customized Accounting for Your Business Success
                    </p>

                    <div>
                        <p className='font-medium text-lg'>
                            {paragraphs[currentParagraph]}
                        </p>
                    </div>

                    <a href='#about-us' className='px-6 py-3 bg-[#2F7F93] uppercase font-medium'>
                        about us 
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
