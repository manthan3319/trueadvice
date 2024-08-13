import React from 'react';
import { groww, insurancebg } from '../../Images/Images';
import { Link } from 'react-router-dom';

export const Home_Aboutus = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${insurancebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        backgroundAttachment: 'fixed',
      }}
      className='py-[50px]'
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(13 48 42 / 74%)',
          zIndex: 1,
        }}
      />
      <div className='lg:max-w-[1440px] m-auto lg:px-[50px] relative z-[2]'>
        <h1 className='xl:text-[60px] font-merriweather text-center text-white font-bold relative title z-[999]'>
          About Us
          <span className='absolute xl:left-[42%] top-[-14px] opacity-[0.2] z-[1]'>
            <img src={groww} alt='img' className='w-[342px] h-[104px]' />
          </span>
        </h1>

        <div className='text-white my-[50px] bg-[#6262623bs] p-[25px] about_card'>
          <h1 className='lg:text-[80px] font-merriweather font-bold'>TrueAdvice</h1>
          <p className='mb-[15px] font-roboto text-[23px]'>At TrueAdvice, we are committed to providing comprehensive financial and advisory services that cater to your diverse needs. Established with the mission of simplifying financial management, we offer a wide range of services designed to secure your future and enhance your financial well-being.</p>
          <p className='mb-[15px] font-roboto text-[23px]'>Our offerings include Health Insurance, Term Life Insurance, Guaranteed Return Plans, and Direct Mutual Funds to ensure your investments are secure and yield optimal returns. For those looking for financial support, we provide Home Loans, Personal Loans, Business Loans, and more, tailored to your specific requirements.</p>
          <p className='mb-[15px] font-roboto text-[23px]'>Beyond financial services, we specialize in GST Registration, Tax Returns, Accounting, and Consulting & Advisory Services. Our team of experts is dedicated to offering accurate, timely, and reliable advice to help you navigate the complexities of financial planning and regulatory compliance.</p>
          <p className='mb-[15px] font-roboto text-[23px]'>At TrueAdvice, we believe in building lasting relationships with our clients through trust, transparency, and unparalleled service. Your financial success is our priority, and we are here to guide you every step of the way.</p>
          <div>
            <Link className='bg-customGreenDarker py-[10px] px-[30px] rounded-[4px] inline-block font-roboto text-[18px]'>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
