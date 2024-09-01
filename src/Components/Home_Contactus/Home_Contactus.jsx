import React from 'react';
import { Title } from '../Functions/Functions';
import { groww } from '../../Images/Images';

export const Home_Contactus = () => {
    return (
        <div className='bg-custome py-[50px]'>
            <div className='lg:max-w-[1140px] m-auto px-[20px] md:px-[50px]'>
                <Title
                    title="Contact Us"
                    imageSrc={groww}
                />
                <div className='flex flex-wrap justify-between gap-[25px] mt-[50px]'>
                    <div className='flex flex-col gap-[15px] items-center bg-[#ffffff0d] p-[20px] md:p-[45px] rounded-[8px] flex-grow'>
                        <span className='text-white md:text-[35px]'><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <p className='text-white font-roboto text-[19px] text-center md:text-left'>M-1 Ofira Business Hub Near Bhagwan Mahavir College Vip Road Surat</p>
                    </div>

                    <div className='flex flex-col gap-[15px] items-center bg-[#ffffff0d] p-[20px] md:p-[45px] rounded-[8px] flex-grow'>
                        <span className='text-white text-[29px]'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                        <p className='text-white font-roboto text-[19px] text-center md:text-left'>bhadresharvindpatel@gmail.com</p>
                    </div>

                    <div className='flex flex-col gap-[15px] items-center bg-[#ffffff0d] p-[20px] md:p-[45px] rounded-[8px] flex-grow'>
                        <span className='text-white text-[29px]'><i className="fa fa-phone-square" aria-hidden="true"></i></span>
                        <p className='text-white font-roboto text-[19px] text-center md:text-left'>+91 84908 26662</p>
                    </div>
                </div>

                <div className="bg-[#ffffff0d] p-[20px] mt-[50px] rounded-[10px]">
                    <div>
                        <h1 className='font-figtree font-bold text-center text-white text-[24px] md:text-[36px] mb-[15px]'>Inquiry Form</h1>
                    </div>
                    <form>
                        <div className='flex flex-wrap md:flex-row gap-[15px]'>
                            <input type="text" placeholder='Enter Name' className='from_input outline-none w-full md:w-[calc(50%-7.5px)]' />
                            <input type="email" placeholder='Enter Email' className='from_input outline-none w-full md:w-[calc(50%-7.5px)]' />
                        </div>
                        <div className='flex flex-wrap md:flex-row gap-[15px] mt-[15px]'>
                            <input type="number" placeholder='Enter Number' className='from_input outline-none w-full md:w-[calc(50%-7.5px)]' />
                            <input type="text" placeholder='Enter Subject' className='from_input outline-none w-full md:w-[calc(50%-7.5px)]' />
                        </div>
                        <div className='flex flex-wrap md:flex-row gap-[15px] mt-[15px]'>
                            <textarea placeholder='Enter Message' className='outline-none w-full from_input' rows={8} />
                        </div>
                        <div className='text-center mt-[20px]'>
                            <button className='text-white font-[25px] bg-customGreenDarker py-[13px] px-[45px] rounded-[50px] border-[1px] border-white hover:text-black hover:bg-white'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
