import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../images/bigger-logo-png.png'

const Footer = () => {
    return (
        <div className='flex flex-col tracking-wider'>
            <div className='w-full footer'>
                <div className='footer-content md:p-6 flex flex-col gap-10  text-white text-sm
                    md:text-lg
                    xl:flex-row lg:p-14'>
                        <div className='flex flex-col gap-2 font-semibold py-12 px-6 border-b border-white xl:border-0'>
                            <img src={Logo} alt="" className='w-40'/>

                            <p>
                            G10 Security Services is a new security services 
                            company with a fresh approach to protecting people 
                            and businesses. 
                            </p>

                            <div className='grid grid-cols-4 gap-1 w-1/2 text-[#42acc6]'>
                                <div className='w-8 h-8 bg-black flex items-center justify-center'>
                                    <FacebookIcon />
                                </div>

                                <div className='w-8 h-8 bg-black flex items-center justify-center'>
                                    <TwitterIcon />
                                </div>

                                <div className='w-8 h-8 bg-black flex items-center justify-center'>
                                    <YouTubeIcon />
                                </div>

                                <div className='w-8 h-8 bg-black flex items-center justify-center'>
                                    <InstagramIcon />
                                </div>
                            </div>
                        </div>

                        <div className='p-6 grid grid-cols-2 gap-4
                        md:grid-cols-3 lg:gap-6'>                
                            <div className='flex flex-col gap-3'>
                            <h1 className='text-xl font-semibold
                            lg:text-2xl'>
                            Quick Links
                            </h1> 

                            <div className='flex flex-col gap-1'>
                                    <a href="#hero">
                                        Home
                                    </a>                        

                                    <a href="#about-us">
                                        About
                                    </a>  

                                    <a href="#offer">
                                        Services
                                    </a>  

                                    <a href="#team">
                                        Team
                                    </a>  

                                    <a href="#contact">
                                        Contact
                                    </a>  
                            </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <h1 className='text-xl font-semibold lg:text-2xl'>
                                    Our Services
                                </h1> 

                                <div className='flex flex-col gap-1'>
                                    <p>
                                        Personalized Accounting
                                    </p>                        

                                    <p>
                                        Tax Planning and Preparation
                                    </p>  

                                    <p>
                                        Business Consulting
                                    </p>  

                                    <p>
                                        Financial Reporting
                                    </p>  

                                    <p>
                                        Payroll Services
                                    </p>  
                                </div>
                            </div>


                            <div className='flex flex-col gap-3'>
                            <h1 className='text-xl font-semibold
                            lg:text-2xl'>
                            Contact Us
                            </h1> 

                            <div className='flex flex-col gap-1'>
                                <p className='flex items-center gap-1'>
                                        <span className='text-[#42acc6]'>
                                        <PlaceIcon />
                                        </span>
                                        <span>
                                        23, Beaumont Lodge Rd, 
                                        Leicester, Leicestershire United.
                                        </span>
                                </p> 

                                <p className='flex items-center gap-2'>
                                        <span className='text-[#42acc6]'>
                                        <PhoneIcon />
                                        </span>
                                        <span>
                                        +447448319130
                                        </span>
                                </p>                     

                                <p className='flex items-center gap-2 '>
                                        <span className='text-[#42acc6]'>
                                        <MailIcon />
                                        </span>
                                        <span className=''>
                                        info@jitaccountants.co.uk
                                        </span>
                                </p> 

                        
                            </div>
                            </div>
                        </div>

                        
                </div>
           </div> 

           <div className='w-full flex items-center justify-center bg-black text-white p-6 tex-sm gap-1
           md:text-lg text-center'>
                <p>&copy; 2024 All rights reserved Designed By GodwinTech</p>
           </div>
        </div>
    )
}

export default Footer
