import React, { useState } from 'react';
import BookKeeping from '../images/book-keeping.jpg'; // Ensure the correct path to the image
import Cost from '../images/Cost.png'
import Taxes2 from '../images/Taxes4.jpg';
import Taxes3 from '../images/Taxes6.jpg'; // Ensure the correct path to
import Payroll from '../images/Payroll1.jpg';
import Vat from '../images/Vat.jpg'
import Company from '../images/Company.jpg'
import Budget from '../images/Budget.jpg'
import { motion } from 'framer-motion';


const Services = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (serviceId) => {
        setOpenService(openService === serviceId ? null : serviceId);
    };

    const animationPropsLeft = {
        initial: { y: 200, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 2, ease: 'easeIn' },
        viewport: { once: true }
    };

    const animationPropsRight = {
        initial: { x: -300, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 2, ease: 'easeIn' },
        viewport: { once: true }
    };


    return (
        <div className='w-full services mb-6' id='offer'>
            <div className='flex services-content flex-col gap-2 p-6 items-center text-center lg:p-14'>
                <motion.div 
                 className='flex flex-col gap-2 items-center'
                 {...animationPropsRight}>
                        <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                            What We Offer
                        </p>

                        <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                            Tailored Accounting Solutions for Seamless Success
                        </p>

                        <p className='text-[#292929] tracking-wider text-lg lg:w-1/2'>
                            We specialize in providing top-notch accounting solutions tailored to meet the diverse needs of businesses, entrepreneurs, and individuals. As a freelance accounting firm, we offer a unique blend of expertise, flexibility, and personalized service, empowering our clients to navigate the complexities of accounting seamlessly.
                        </p>
                </motion.div>

                <motion.div className='grid grid-cols-1 gap-6 w-full mt-6 md:grid-cols- lg:grid-cols-3 xl:grid-cols-4'
                {...animationPropsLeft}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`w-full flex flex-col justify-between bg-white transition-all duration-300 ${openService === index ? 'h-auto' : 'h-[400px] md:h-[700px] lg:h-[400px]'}`}
                            id={`service${index + 1}`}
                        >
                            <div className='p-6 flex flex-col w-full gap-3'>
                                <div className='text-[#2F7F93]'>
                                    <img src={service.image} alt={service.title} className='w-full h-auto rounded-md' />
                                </div>
                                <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                                    {service.title}
                                </p>
                                {openService === index && (
                                    <>
                                        <p className='text-left'>{service.description}</p>
                                        <p className='text-left'>{service.additionalText}</p>
                                        <ul className='text-[#303030] text-sm font-medium tracking-wider text-left flex flex-col gap-1'>
                                            {service.listItems.map((item, idx) => (
                                                <li key={idx} className='list-disc ml-3'>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <button
                                onClick={() => toggleService(index)}
                                className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase hover:bg-[#292929] hover:text-[#2F7F93]'
                            >
                                {openService === index ? 'Show Less' : 'Learn More'}
                            </button>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const services = [
    {
        image: BookKeeping,
        title: 'Bookkeeping/Accounting',
        description: `Based on our experience, we recognize that businesses often encounter challenges with managing their bookkeeping/Accounting. Irrespective of the size of your operation, we will assist you in handling these tasks using our current professional expertise.`,
        additionalText: `Our services also include:`,
        listItems: [
            'Recommendations on suitable technology, software, and apps tailored to your business needs.',
            'Implementation of user-friendly processes and procedures.',
            'Flexibility to undertake tasks at your office or ours as needed.'
        ]
    },
    {
        image: Cost,
        title: 'Cost Control Services',
        description: `Collaborating closely with your team, our accountants will analyse your processes and operations to offer insights into your business's key drivers and profitability. Utilizing our expertise in cost control, management, and accounting, we identify potential areas of inefficiency, duplicated efforts, and revenue avenues.`,
        additionalText: ``,
        listItems: []
    },
    {
        image: Taxes3,
        title: 'Individual/Personal Taxes',
        description: `If you are self-employed, we will handle the task of filing your tax returns, sparing you from the responsibility. Rest assured, we will see to it that your online self-assessments are submitted on time, and your paper versions are filed as at when due.`,
        additionalText: `Our tax team offers a range of additional services, including:`,
        listItems: [
            'Submitting self-assessment tax returns',
            'Providing tax advice, planning, and preparation',
            'Determining your tax liability',
            'Calculating capital gains tax and applicable reliefs',
            'Assisting with Inheritance Tax planning',
            'Managing PAYE and National Insurance contributions',
            'Facilitating repayment claims',
            'Conducting reviews of taxation affairs and positions',
            'Handling tax disputes with HMRC',
            'Managing correspondence and meetings with HMRC',
            'Advising on income tax related to pension and investment income',
            'Explaining allowances and exemptions'
        ]
    },
    {
        image: Taxes2,
        title: 'Business/Corporate Taxes',
        description: `Our skilled tax team is dedicated to assisting you with the determination and filing of your corporate tax returns, ensuring that your company maximizes its eligible benefits.`,
        additionalText: `Among the array of corporation tax services, we offer are:`,
        listItems: [
            'Assessing and optimizing company taxation affairs and opportunities',
            'Formulating corporate tax plans and preparing annual returns for limited companies',
            'Interpreting and communicating changes in tax legislation.',
            'Providing tax compliance guidance and advice on pertinent changes',
            'Calculating tax liabilities accurately',
            'Utilizing reliefs, tax losses, and deferral opportunities to your advantage',
            'Offering advice on Capital Gains Tax',
            'Managing PAYE and National Insurance contributions',
            'Advising on tax schemes',
            'Submitting tax returns',
            'Handling correspondence with HMRC'
        ]
    },
    {
        image: Payroll,
        title: 'Payroll Management',
        description: `Every business desires dependable and precise payroll services. We possess comprehensive technical expertise and hands-on experience in PAYE and Pension auto-enrolment, utilizing specialized software to ensure absolute accuracy.`,
        additionalText: ``,
        listItems: []
    },
    {
        image: Vat,
        title: 'VAT Returns',
        description: `At JiT Accountants, we handle the preparation and submission of VAT returns that fully comply with Making Tax Digital (MTD) regulations. Your dedicated in-house accountant meticulously prepares each return, ensuring your company remains current, timely, and compliant.`,
        additionalText: ``,
        listItems: []
    },
    {
        image: Company,
        title: 'Company Formation',
        description: `We offer virtual company secretary services, providing crucial support considering the increased complexity and legal responsibilities imposed on directors by statutory obligations, such as limited company registrations and restructuring.`,
        additionalText: `Our comprehensive services include:`,
        listItems: [
            'Company incorporation or formation',
            'Guidance on document preparation and submission to Companies House',
            'Preparation of minutes and resolutions of Directors and shareholders',
            'Filing statutory accounts and documents to HMRC',
            'Drafting and amending memorandum of association',
            'Handling shares issues, debentures, mortgages, etc.',
            'Facilitating share allotment, transfer, and transmission',
            'Providing advice on registered office matters',
            'Managing appointments and resignations of directors'
        ]
    },
    {
        image: Budget,
        title: 'Business Planning, Budgeting, and Forecasting',
        description: `Effective planning, budgeting, and forecasting are crucial factors influencing a business's outcome. We offer the expertise, techniques, and experience needed to establish and support these processes, fostering the growth and success of your business.`,
        additionalText: ``,
        listItems: []
    }
];

export default Services;
