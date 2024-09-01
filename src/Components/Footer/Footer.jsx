import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const NavbarMenu = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Services",
            link: "/services"
        },
        {
            id: 3,
            name: "About Us",
            link: "/aboutus"
        },
        {
            id: 6,
            name: "Faq",
            link: "/faq"
        },
    ];

    const Insurance = [
        {
            name: "Health Insurance"
        },
        {
            name: "Term Life insurance"
        },
        {
            name: "Guaranteed Return Plan"
        },
        {
            name: "Direct Mutual Funds"
        },
        {
            name: "Pocket Protect"
        },
    ];

    const Cards = [
        {
            name: "Home Loan"
        },
        {
            name: "Transfer Home Loan"
        },
        {
            name: "Loan Against Property"
        },
        {
            name: "Personal Loan"
        },
        {
            name: "Business Loan"
        },
        {
            name: "Card Loan"
        }
    ];

    const otherservices = [
        {
            name: "GST Registration"
        },
        {
            name: "GST Returns"
        },
        {
            name: "Income Tax Returns"
        },
        {
            name: "TDS Return"
        },
        {
            name: "Accounting"
        },
        {
            name: "Income Tax Representation"
        },
        {
            name: "GST Representation"
        },
        {
            name: "Consulting and Advisory Services"
        },
    ];

    return (
        <div className='bg-customGreenDark'>
            <div className='lg:max-w-[1440px] m-auto px-[20px] lg:px-[50px] py-[50px]'>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full lg:w-[20%] mb-[30px] lg:mb-0'>
                        <Link to="/" className='text-white font-roboto text-[25px]'>
                            <h1>Logo</h1>
                        </Link>
                        <div className='flex gap-[15px] mt-[30px]'>
                            <Link className='text-white text-[25px]'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                            <Link className='text-white text-[25px]'>
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </Link>
                            <Link className='text-white text-[25px]'>
                                <i className="fa fa-google" aria-hidden="true"></i>
                            </Link>
                            <Link className='text-white text-[25px]'>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full sm:w-[50%] lg:w-[20%] mb-[30px] lg:mb-0'>
                        <h1 className='font-merriweather font-bold text-[22px] lg:text-[26px] text-white inline-block border-b-[1px] border-custom pb-[10px] mb-[20px]'>
                            Company
                        </h1>
                        <ul className='flex flex-col gap-[15px]'>
                            {NavbarMenu.map(item => (
                                <li key={item.id} className='text-white text-[15px] lg:text-[17px] font-roboto'>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full sm:w-[50%] lg:w-[20%] mb-[30px] lg:mb-0'>
                        <h1 className='font-merriweather font-bold text-[22px] lg:text-[26px] text-white inline-block border-b-[1px] border-custom pb-[10px] mb-[20px]'>
                            Insurance
                        </h1>
                        <ul className='flex flex-col gap-[15px]'>
                            {Insurance.map((item, index) => (
                                <li key={index} className='text-white text-[15px] lg:text-[17px] font-roboto'>
                                    <Link className='flex items-center gap-[7px]'>
                                        <span className='text-[10px] text-customGreenDarker'>
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>{item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full sm:w-[50%] lg:w-[20%] mb-[30px] lg:mb-0'>
                        <h1 className='font-merriweather font-bold text-[22px] lg:text-[26px] text-white inline-block border-b-[1px] border-custom pb-[10px] mb-[20px]'>
                            Cards & Loans
                        </h1>
                        <ul className='flex flex-col gap-[15px]'>
                            {Cards.map((item, index) => (
                                <li key={index} className='text-white text-[15px] lg:text-[17px] font-roboto'>
                                    <Link className='flex items-center gap-[7px]'>
                                        <span className='text-[10px] text-customGreenDarker'>
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>{item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full sm:w-[50%] lg:w-[20%]'>
                        <h1 className='font-merriweather font-bold text-[22px] lg:text-[26px] text-white inline-block border-b-[1px] border-custom pb-[10px] mb-[20px]'>
                            Other Services
                        </h1>
                        <ul className='flex flex-col gap-[15px]'>
                            {otherservices.map((item, index) => (
                                <li key={index} className='text-white text-[15px] lg:text-[17px] font-roboto'>
                                    <Link className='flex items-center gap-[7px]'>
                                        <span className='text-[10px] text-customGreenDarker'>
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>{item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-center py-[10px] border-t-[1px] border-customGreenDarker'>
                <p className="font-merriweather text-white font-medium text-[14px] lg:text-[18px]">
                    © Copyright 2024 by 
                    <a className="text-gold font-ubuntu font-bold hover:text-cu" href="/"> Sadguru Tech </a>
                </p>
            </div>
        </div>
    );
};
