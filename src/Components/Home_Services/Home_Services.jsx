import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Accounting, AgainstProperty, BusinessLoan, cardloan, ConsultingAdvisory, DirectMutual, groww, GSTRegistration, GSTRepresentation, GSTReturns, GuaranteedPlan, health_insurance, HomeLoan, IncomeRepresentation, IncomeReturns, PersonalLoan, PocketProtect, tdsreturun, terminsurance, TransferLoan } from '../../Images/Images';

const servicesData = [
    {
        id: 1,
        image: health_insurance,
        title: "Health Insurance",
    },
    {
        id: 2,
        image: terminsurance,
        title: "Term Life insurance",
    },
    {
        id: 3,
        image: GuaranteedPlan,
        title: "Guaranteed Return Plan",
    },
    {
        id: 4,
        image: DirectMutual,
        title: "Direct Mutual Funds",
    },
    {
        id: 5,
        image: PocketProtect,
        title: "Pocket Protect",
    },
];

const CardloanData = [
    {
        id: 1,
        image: HomeLoan,
        title: "Home Loan",
    },
    {
        id: 2,
        image: TransferLoan,
        title: "Transfer Home Loan",
    },
    {
        id: 3,
        image: AgainstProperty,
        title: "Loan Against Property",
    },
    {
        id: 4,
        image: PersonalLoan,
        title: "Personal Loan",
    },
    {
        id: 5,
        image: BusinessLoan,
        title: "Business Loan",
    },
    {
        id: 6,
        image: cardloan,
        title: "Card Loan",
    },
];

const OtherServicesData = [
    {
        id: 1,
        image: GSTRegistration,
        title: "GST Registration",
    },
    {
        id: 2,
        image: GSTReturns,
        title: "GST Returns",
    },
    {
        id: 3,
        image: IncomeReturns,
        title: "Income Tax Returns",
    },
    {
        id: 4,
        image: tdsreturun,
        title: "TDS Return",
    },
    {
        id: 5,
        image: Accounting,
        title: "Accounting",
    },
    {
        id: 6,
        image: IncomeRepresentation,
        title: "Income Tax Representation",
    },
    {
        id: 7,
        image: GSTRepresentation,
        title: "GST Representation",
    },
    {
        id: 8,
        image: ConsultingAdvisory,
        title: "Consulting and Advisory Services",
    },
];

export const Home_Services = () => {
    return (
        <div className='bg-custome py-[50px]'>
            <div className='lg:max-w-[1140px] m-auto px-[20px] md:px-[50px]'>
                <div className='text-center relative'>
                    <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-merriweather text-white font-bold relative title'>
                        Our Services
                        <span className='absolute left-[25%] md:left-[38%] lg:left-[42%] z-[-1] top-[-14px] opacity-[0.2]'>
                            <img src={groww} alt='img' className='w-[200px] md:w-[270px] lg:w-[342px] h-[60px] md:h-[80px] lg:h-[104px]' />
                        </span>
                    </h1>
                </div>

                <Tabs className='mt-[30px] md:mt-[40px]'>
                    <TabList className="flex flex-col md:flex-row justify-center gap-[10px] md:gap-[20px] lg:gap-[30px] text-white text-[16px] md:text-[18px] font-bold">
                        <Tab>Insurance & Investment</Tab>
                        <Tab>Cards & Loans</Tab>
                        <Tab>Other Services</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex flex-wrap gap-[15px] md:gap-[20px] mt-[20px] justify-center'>
                            {servicesData.map((service) => (
                                <motion.div 
                                    key={service.id} 
                                    className='flex py-[15px] w-[100%] sm:w-[45%] md:w-[30%] lg:w-[18.6%] flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: service.id * 0.1 }}
                                >
                                    <div>
                                        <img src={service.image} alt={service.title} className='rounded-[50%] w-[130px] md:w-[150px] lg:w-[170px] min-h-[130px] md:min-h-[150px] lg:min-h-[170px] max-h-[130px] md:max-h-[150px] lg:max-h-[170px] m-auto' />
                                    </div>
                                    <div className='text-center mt-[7px]'>
                                        <h1 className='text-[16px] md:text-[18px] lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex flex-wrap gap-[15px] md:gap-[20px] justify-center mt-[20px]'>
                            {CardloanData.map((service) => (
                                <motion.div 
                                    key={service.id} 
                                    className='flex py-[15px] w-[100%] sm:w-[45%] md:w-[30%] lg:w-[23%] flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: service.id * 0.1 }}
                                >
                                    <div>
                                        <img src={service.image} alt={service.title} className='rounded-[50%] w-[130px] md:w-[150px] lg:w-[170px] min-h-[130px] md:min-h-[150px] lg:min-h-[170px] max-h-[130px] md:max-h-[150px] lg:max-h-[170px] m-auto' />
                                    </div>
                                    <div className='text-center mt-[7px]'>
                                        <h1 className='text-[16px] md:text-[18px] lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex flex-wrap gap-[15px] md:gap-[20px] justify-center mt-[20px]'>
                            {OtherServicesData.map((service) => (
                                <motion.div 
                                    key={service.id} 
                                    className='flex py-[15px] w-[100%] sm:w-[45%] md:w-[30%] lg:w-[23%] flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: service.id * 0.1 }}
                                >
                                    <div>
                                        <img src={service.image} alt={service.title} className='rounded-[50%] w-[130px] md:w-[150px] lg:w-[170px] min-h-[130px] md:min-h-[150px] lg:min-h-[170px] max-h-[130px] md:max-h-[150px] lg:max-h-[170px] m-auto' />
                                    </div>
                                    <div className='text-center mt-[7px]'>
                                        <h1 className='text-[16px] md:text-[18px] lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
