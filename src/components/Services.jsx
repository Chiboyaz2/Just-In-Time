import React from 'react'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GroupIconOutlinedIcon from '@mui/icons-material/GroupOutlined';
import VideocamIconOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import HeadsetIconOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import CleaningServicesIconOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';

const Services = () => {
    return (
        <div className='w-full services mb-6'>
            <div className='flex services-content flex-col gap-2 p-6 items-center text-center lg:p-14'> 
                <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                What We Offer
                </p>

                <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                Your safety is our top priority
                </p>

                <p className='text-[#292929] tracking-wider text-lg lg:w-1/2'>
                Our team of experts has the flexibility to offer a range of services 
                across various sectors while adapting our approach to suit your specific demands.
                </p>

                <div className='grid grid-cols-1 gap-6 w-full mt-6
                md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <GppGoodOutlinedIcon className="icon" />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Security services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            From event security to alarm monitoring and response, 
                            we have the expertise to keep you and your assets safe and secure.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <ApartmentOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            london Security services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            When it comes to security in London, trust the experts at G10 Security Services. 
                            With years of experience serving businesses and individuals in the city.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <GroupIconOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Reception services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            Our experienced team can manage all aspects of reception, 
                            including visitor registration, mail handling, and telephone answering.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <VideocamIconOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Electronic Security
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            From CCTV and access control systems to 
                            alarm monitoring and response, we have the expertise to 
                            keep your business protected around the clock.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <HeadsetIconOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Support services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            From concierge and cleaning services to maintenance and repairs, 
                            we have the expertise to keep your premises running smoothly.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <CleaningServicesIconOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Cleaning Services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            With G10's cleaning services, you can be confident that your 
                            premises are maintained to the highest standards of cleanliness and hygiene.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <SupervisedUserCircleOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            Industrial cleaning services
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            From factories and warehouses to manufacturing plants and more, 
                            our experienced team can tackle even the toughest cleaning challenges.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <Diversity1OutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-xl tracking-wider'>
                            coronavirus decontamination
                            </p>

                            <p className='text-[#303030] font-medium tracking-wider'>
                            Our expert team uses the latest technology and protocols to thoroughly 
                            sanitize your facility and ensure a safe, healthy environment for all.
                            </p>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
