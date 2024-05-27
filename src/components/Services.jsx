import React from 'react'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
// import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
// import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';


const Services = () => {
    return (
        <div className='w-full services mb-6' id='offer'>
            <div className='flex services-content flex-col gap-2 p-6 items-center text-center lg:p-14'> 
                <p className='italic text-[#1F5961] font-semibold tracking-wider'>
                What We Offer
                </p>

                <p className='uppercase text-xl text-[#392929] font-semibold tracking-wider'>
                Tailored Accounting Solutions for Seamless Success
                </p>

                <p className='text-[#292929] tracking-wider text-lg lg:w-1/2'>
                We specialize in providing top-notch accounting solutions tailored to meet the diverse needs of businesses, entrepreneurs, and individuals. As a freelance accounting firm, we offer a unique blend of expertise, flexibility, and personalized service, empowering our clients to navigate the complexities of accounting seamlessly.
                </p>

                <div className='grid grid-cols-1 gap-6 w-full mt-6
                md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <MenuBookOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Bookkeeping/Accounting: 
                            </p>

                            <p className='text-left'>
                            Based on our experience, we recognize that businesses often encounter challenges with managing their bookkeeping/Accounting. Irrespective of the size of your operation, we will assist you in handling these tasks using our current professional expertise.
                            <br />
                            With a comprehensive understanding of the legal obligations in record-keeping, we offer guidance to ensure compliance, which forms the foundation of your tax return.
                            <br />
                            We offer flexibility in our work arrangements, allowing us to operate either in your office or ours, depending on your preference. Additionally, we can evaluate your company's software to ensure it generates accurate and complete financial data.
                            </p>

                            <p className='text-left '>
                            Our services also include:
                            </p>

                            <ul className='text-[#303030] text-sm font-medium tracking-wider text-left flex flex-col gap-1'>
                                <li className='list-disc ml-3'>
                                Recommendations on suitable technology, software, and apps tailored to your business needs.
                                </li>

                                <li className='list-disc ml-3'>
                                Implementation of user-friendly processes and procedures.
                                </li>

                                <li className='list-disc ml-3'>
                                Flexibility to undertake tasks at your office or ours as needed.
                                </li>

                            </ul>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <PointOfSaleOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Cost Control Services: 
                            </p>

                            <p className='text-left'>
                            Collaborating closely with your team, our accountants will analyse your processes and operations to offer insights into your business's key drivers and profitability. Utilizing our expertise in costcontrol, management, and accounting, we identify potential areas of inefficiency, duplicated efforts,and revenue avenues. Through our technical skills and competencies, we help to enhance your business'sprofitability by implementing strategic measures to reduce waste and capitalize on opportunities.  
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
                                <CurrencyPoundIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Individual/Personal Taxes 
                            </p>

                            <p className='text-left'>
                            If you are self-employed, we will handle the task of filing your tax returns, sparing you from the responsibility. Rest assured, we will see to it that your online self-assessments are submitted on time, and your paper versions are filed as at when due.
                            </p>

                            <p className='text-left '>
                            Our tax team offers a range of additional services, including:
                            </p>

                            <ul className='text-[#303030] text-sm font-medium tracking-wider text-left flex flex-col gap-1'>
                                <li className='list-disc ml-3'>
                                Submitting self-assessment tax returns
                                </li>

                                <li className='list-disc ml-3'>
                                Providing tax advice, planning, and preparation
                                </li>

                                <li className='list-disc ml-3'>
                                Determining your tax liability
                                </li>

                                <li className='list-disc ml-3'>
                                Calculating capital gains tax and applicable reliefs
                                </li>

                                <li className='list-disc ml-3'>
                                Assisting with Inheritance Tax planning
                                </li>

                                <li className='list-disc ml-3'>
                                Managing PAYE and National Insurance contributions
                                </li>

                                <li className='list-disc ml-3'>
                                Facilitating repayment claims
                                </li>

                                <li className='list-disc ml-3'>
                                Conducting reviews of taxation affairs and positions
                                </li>

                                <li className='list-disc ml-3'>
                                Handling tax disputes with HMRC
                                </li>

                                <li className='list-disc ml-3'>
                                Managing correspondence and meetings with HMRC
                                </li>

                                <li className='list-disc ml-3'>
                                Advising on income tax related to pension and investment income
                                </li>

                                <li className='list-disc ml-3'>
                                Explaining allowances and exemptions
                                </li>
                            </ul>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <CurrencyPoundIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Business/Corporate Taxes 
                            </p>

                            <p className='text-left'>
                            Our skilled tax team is dedicated to assisting you with the determination and filing of your corporate tax returns, ensuring that your company maximizes its eligible benefits.
                            </p>

                            <p className='text-left '>
                            Among the array of corporation tax services, we offer are:
                            </p>

                            <ul className='text-[#303030] text-sm font-medium tracking-wider text-left flex flex-col gap-1'>
                                <li className='list-disc ml-3'>
                                Assessing and optimizing company taxation affairs and opportunities
                                </li>

                                <li className='list-disc ml-3'>
                                Formulating corporate tax plans and preparing annual returns for limited companies
                                </li>

                                <li className='list-disc ml-3'>
                                Interpreting and communicating changes in tax legislation.
                                </li>

                                <li className='list-disc ml-3'>
                                Providing tax compliance guidance and advice on pertinent changes
                                </li>

                                <li className='list-disc ml-3'>
                                Calculating tax liabilities accurately
                                </li>

                                <li className='list-disc ml-3'>
                                Utilizing reliefs, tax losses, and deferral opportunities to your advantage
                                </li>

                                <li className='list-disc ml-3'>
                                Offering advice on Capital Gains Tax
                                </li>

                                <li className='list-disc ml-3'>
                                Managing PAYE and National Insurance contributions
                                </li>

                                <li className='list-disc ml-3'>
                                Advising on tax schemes
                                </li>

                                <li className='list-disc ml-3'>
                                Submitting tax returns
                                </li>

                                <li className='list-disc ml-3'>
                                Handling correspondence with HMRC
                                </li>

                            </ul>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                            <ReceiptOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Payroll Management: 
                            </p>

                            <p className='text-left'>
                            Every business desire dependable and precise payroll services. We possess comprehensive technical expertise and hands-on experience in PAYE and Pension auto-enrolment, utilizing specialized software to ensure absolute accuracy. Our team members are extensively trained and equipped with the latest skills in utilizing these specialized tools.

                            <br />
                            Our services adhere strictly to relevant legislations. Our staff undergo continuous training to stay abreast of current and anticipated changes in payroll and pension regulations, guaranteeing your compliance at all times.

                            <br />
                            Should you require it, we offer a fully managed payroll service with dedicated account personnel. This comprehensive service includes scheduled reviews aligned with agreed Service Level Agreements (SLAs) regardless of your company's size.

                            <br />
                            For assistance with auto-enrolment, our advisors are available to support you as needed. Additionally, our BACS system facilitates seamless transfer of your payroll payments from your bank account.
                            
                            <br />
                            We handle various payroll tasks such as setting up starters and leavers, liaising with HMRC, configuring pensions and payroll deductions, as well as ensuring timely submissions and other requirements.
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
                                <AssignmentReturnOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            VAT Returns
                            </p>

                            <p className='text-left'>
                            At JiT Accountants, we handle the preparation and submission of VAT returns that fully comply with Making Tax Digital (MTD) regulations. Your dedicated in-house accountant meticulously prepares each return, ensuring your company remains current, timely, and compliant.

                            <br />
                            Our VAT specialists at JiT Accountants oversee all aspects of this intricate process, conducting regular reviews of your VAT status to guarantee accurate payments. Allow us to alleviate the pressure and offer you reassurance regarding your VAT responsibilities.
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
                                <AddBusinessOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Company Formation 
                            </p>

                            <p className='text-left'>
                            We offer virtual company secretary services, providing crucial support considering the increased complexity and legal responsibilities imposed on directors by statutory obligations, such as limited company registrations and restructuring.

                            <br />
                            Our skilled team ensures compliance with the Companies laws, advising on disclosure and filing requirements to prevent potential prosecution and afford you a peace of mind.
                            </p>

                            <p className='text-left '>
                            Our comprehensive services include:
                            </p>

                            <ul className='text-[#303030] text-sm font-medium tracking-wider text-left flex flex-col gap-1'>
                                <li className='list-disc ml-3'>
                                Company incorporation or formation
                                </li>

                                <li className='list-disc ml-3'>
                                Guidance on document preparation and submission to Companies House
                                </li>

                                <li className='list-disc ml-3'>
                                Preparation of minutes and resolutions of Directors and shareholders
                                </li>

                                <li className='list-disc ml-3'>
                                Filing statutory accounts and documents to HMRC
                                </li>

                                <li className='list-disc ml-3'>
                                Drafting and amending memorandum of association
                                </li>

                                <li className='list-disc ml-3'>
                                Handling shares issues, debentures, mortgages, etc.
                                </li>

                                <li className='list-disc ml-3'>
                                Facilitating share allotment, transfer, and transmission
                                </li>

                                <li className='list-disc ml-3'>
                                Providing advice on registered office matters
                                </li>

                                <li className='list-disc ml-3'>
                                Managing appointments and resignations of directors
                                </li>

                            </ul>
                        </div>
                        
                        <button className='w-full p-3 bg-[#2F7F93] tracking-wider font-medium text-white uppercase
                        hover:bg-[#292929] hover:text-[#2F7F93]'>
                            Learn More
                        </button>
                    </div>

                    <div className='w-full h-68 flex flex-col justify-between bg-white'>
                        <div className='p-6 flex flex-col w-full gap-3'>
                            <div className=' text-[#2F7F93]'>
                                <StormOutlinedIcon />
                            </div>

                            <p className='uppercase text-[#292929] font-semibold text-lg tracking-wider'>
                            Business Planning, Budgeting, and Forecasting
                            </p>

                            <p className='text-left'>
                            Effective planning, budgeting, and forecasting are crucial factors influencing a business's outcome. We offer the expertise, techniques, and experience needed to establish and support these processes, fostering the growth and success of your business. Leveraging our insight into your operations, we utilize available business data to assist you in crafting budgets and forecasting future scenarios. This tailored approach ensures that your business is equipped with the necessary tools to navigate and thrive in dynamic market environments.
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
