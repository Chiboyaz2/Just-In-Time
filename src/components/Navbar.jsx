import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Logo from '../images/LLL.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleServicesToggle = () => {
        setServicesOpen(!servicesOpen);
    };

    return (
        <div className='w-full flex items-center justify-between'>
            

            <img src={Logo} alt="" className='w-32'/>

            <div onClick={handleMenuToggle} className='cursor-pointer lg:hidden'>
                {menuOpen ? <CloseIcon /> : <AppsIcon />}
            </div>

            <div className={`flex-col items-center lg:hidden ${menuOpen ? 'absolute top-14 bg-white flex flex-col gap-3 text-[#292929] left-0 w-full items-start py-2 ' 
            : 'hidden'}`}>
                <a href="#hero" className='p-3 hover:bg-[#2F7F93] border-b w-full'>
                    Home
                </a>
                <a href="#about-us" className='p-3 hover:bg-[#2F7F93] border-b w-full'>
                    About
                </a>
                <div className='relative w-full'>
                    <p onClick={handleServicesToggle} className='p-3 cursor-pointer hover:bg-[#2F7F93] flex items-center justify-between'>
                        <span>
                            Services
                        </span>
                        <span>
                            {servicesOpen ? <RemoveIcon /> : <AddIcon />}
                        </span>
                    </p>
                    {servicesOpen && (
                        <div className='absolute w-full p-2 text-xs text-black left-0 bg-white shadow-lg'>
                            <a href="#service1" className='block px-4 py-2 hover:bg-[#2F7F93]'>Bookkeeping/Accounting</a>
                            <a href="#service2" className='block px-4 py-2 hover:bg-[#2F7F93]'>Cost Control Services</a>
                            <a href="#service3" className='block px-4 py-2 hover:bg-[#2F7F93]'>Individual/Personal Taxes</a>
                            <a href="#service4" className='block px-4 py-2 hover:bg-[#2F7F93]'>Business/Corporate Taxes</a>
                            <a href="#service5" className='block px-4 py-2 hover:bg-[#2F7F93]'>Payroll Management</a>
                            <a href="#service6" className='block px-4 py-2 hover:bg-[#2F7F93]'>VAT Returns</a>
                            <a href="#service7" className='block px-4 py-2 hover:bg-[#2F7F93]'>Company Formation</a>
                            <a href="#service8" className='block px-4 py-2 hover:bg-[#2F7F93]'>Business Planning, Budgeting, and Forecasting</a>
                        </div>
                    )}
                </div>
                <a href="#contact" className='p-3 hover:bg-[#2F7F93] w-full'>
                    Contact
                </a>
            </div>

            <div className='hidden lg:flex items-center gap-3 uppercase text-lg font-semibold text-[#2F7F93]'>
                <a href="#hero" className='p-3 hover:bg-[#2F7F93] hover:text-white'>
                    Home
                </a>
                <a href="#about-us" className='p-3 hover:bg-[#2F7F93] hover:text-white'>
                    About
                </a>
                <div className='relative group'>
                    <p className='p-3 cursor-pointer hover:bg-[#2F7F93] flex items-center justify-center hover:text-white'>
                        <span>
                            Services
                        </span>
                        <span className='mt-[-5px]'>
                            <AddIcon />
                        </span>
                    </p>
                    <div className='absolute w-fit p-2 text-xs text-black left-0 top-14 shadow-lg hidden group-hover:block
                    bg-[#2F7F93] text-white'>
                        <a href="#service1" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Bookkeeping/Accounting</a>
                        <a href="#service2" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Cost Control Services</a>
                        <a href="#service3" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Individual/Personal Taxes</a>
                        <a href="#service4" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Business/Corporate Taxes</a>
                        <a href="#service5" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Payroll Management</a>
                        <a href="#service6" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>VAT Returns</a>
                        <a href="#service7" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Company Formation</a>
                        <a href="#service8" className='block px-4 py-2 hover:bg-white hover:text-[#2F7F93]'>Business Planning, Budgeting, and Forecasting</a>
                    </div>
                </div>
                <a href="#contact" className='p-3 hover:bg-[#2F7F93] hover:text-white'>
                    Contact
                </a>
            </div>

            <div className='flex items-center gap-3 hidden lg:flex'>
                <a href="#home">
                    <FacebookOutlinedIcon />
                </a>
                <a href="#home">
                    <TwitterIcon />
                </a>
                <a href="#home">
                    <YouTubeIcon />
                </a>
                <a href="#home">
                    <InstagramIcon />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
