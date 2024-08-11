import React from 'react';
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
            <div className='lg:max-w-[1440px] m-auto px-[50px]'>
                <div className='text-center relative'>
                    <h1 className='xl:text-[50px] font-merriweather text-white font-bold relative title'>
                        Our Services
                        <span className='absolute xl:left-[42%] z-[-1] top-[-14px] opacity-[0.2]'>
                            <img src={groww} alt='img' className='w-[342px] h-[104px]' />
                        </span>
                    </h1>
                </div>
                <div className='mt-[40px]'>
                    <div><h1 className='text-white lg:text-[28px] font-merriweather  flex gap-[5px] items-center'><span><i class="fa fa-dot-circle-o" aria-hidden="true"></i></span>Insurance & Investment</h1></div>
                    <div className='flex flex-wrap gap-[20px] mt-[20px]'>
                        {servicesData.map((service) => (
                            <div key={service.id} className='flex py-[15px] lg:w-[18.6%]  flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'>
                                <div>
                                    <img src={service.image} alt={service.title} className='rounded-[50%] w-[170px] min-h-[170px] max-h-[170px] m-auto' />
                                </div>
                                <div className='text-center mt-[7px]'>
                                    <h1 className='lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-[40px]'>
                    <div><h1 className='text-white lg:text-[28px] font-merriweather  flex gap-[5px] items-center'><span><i class="fa fa-dot-circle-o" aria-hidden="true"></i></span>Cards& Loans</h1></div>
                    <div className='flex flex-wrap gap-[20px] justify-center mt-[20px]'>
                        {CardloanData.map((service) => (
                            <div key={service.id} className='flex py-[15px] lg:w-[23%]  flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'>
                                <div>
                                    <img src={service.image} alt={service.title} className='rounded-[50%] w-[170px] min-h-[170px] max-h-[170px] m-auto' />
                                </div>
                                <div className='text-center mt-[7px]'>
                                    <h1 className='lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='mt-[40px]'>
                    <div><h1 className='text-white lg:text-[28px] font-merriweather  flex gap-[5px] items-center'><span><i class="fa fa-dot-circle-o" aria-hidden="true"></i></span>Other Services</h1></div>
                    <div className='flex flex-wrap gap-[20px] justify-center mt-[20px]'>
                        {OtherServicesData.map((service) => (
                            <div key={service.id} className='flex py-[15px] lg:w-[23%]  flex-col gap-[5px] bg-[#ffffff57] rounded-[10px] service_card border-[1px] border-customGreenDark'>
                                <div>
                                    <img src={service.image} alt={service.title} className='rounded-[50%] w-[170px] min-h-[170px] max-h-[170px] m-auto' />
                                </div>
                                <div className='text-center mt-[7px]'>
                                    <h1 className='lg:text-[19px] font-roboto text-customGreenDarker font-bold'>{service.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
