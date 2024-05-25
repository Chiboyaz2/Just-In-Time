import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='p-3 w-full flex items-center justify-between'>
            <div onClick={handleMenuToggle} className='cursor-pointer lg:hidden'>
                {menuOpen ? <CloseIcon /> : <AppsIcon />}
            </div>


           <div className='hidden lg:flex items-center gap-3 uppercase text-lg font-semibold divide-x-2 divide-[#2F7F93]'>
            <a href="#home" className='p-3 hover:bg-[#2F7F93] '>
                Home
            </a>

            <a href="#home" className='p-3 hover:bg-[#2F7F93]'>
                about
            </a>

            <a href="#home" className='p-3 hover:bg-[#2F7F93]'>
                services
            </a>

            <a href="#home" className='p-3 hover:bg-[#2F7F93]'>
                contact
            </a>


           </div>

           <div className='flex items-center gap-3'>
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
    )
}

export default Navbar
