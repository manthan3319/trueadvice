import React from 'react';
import { motion } from 'framer-motion';
import { groww, insurancebg } from '../../Images/Images';
import { Link } from 'react-router-dom';
import { Title } from '../Functions/Functions';

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
      className='py-[50px] px-[20px]'
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000000bd',
          zIndex: 1,
        }}
      />
      <div className='lg:max-w-[1440px] m-auto lg:px-[50px] relative z-[2]'>
        <Title
          title="About Us"
          imageSrc={groww}
        />

        <motion.div
          className='text-white my-[50px] bg-[#6262623b] p-[20px] sm:p-[25px] lg:p-[30px] about_card'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-[30px] sm:text-[40px] lg:text-[60px] xl:text-[80px] font-merriweather font-bold'>
            TrueAdvice
          </h1>
          <p className='mb-[10px] sm:mb-[12px] lg:mb-[15px] font-roboto text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[23px]'>
            At TrueAdvice, we are committed to providing comprehensive financial and advisory services that cater to your diverse needs. Established with the mission of simplifying financial management, we offer a wide range of services designed to secure your future and enhance your financial well-being.
          </p>
          <p className='mb-[10px] sm:mb-[12px] lg:mb-[15px] font-roboto text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[23px]'>
            Our offerings include Health Insurance, Term Life Insurance, Guaranteed Return Plans, and Direct Mutual Funds to ensure your investments are secure and yield optimal returns. For those looking for financial support, we provide Home Loans, Personal Loans, Business Loans, and more, tailored to your specific requirements.
          </p>
          <p className='mb-[10px] sm:mb-[12px] lg:mb-[15px] font-roboto text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[23px]'>
            Beyond financial services, we specialize in GST Registration, Tax Returns, Accounting, and Consulting & Advisory Services. Our team of experts is dedicated to offering accurate, timely, and reliable advice to help you navigate the complexities of financial planning and regulatory compliance.
          </p>
          <p className='mb-[10px] sm:mb-[12px] lg:mb-[15px] font-roboto text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[23px]'>
            At TrueAdvice, we believe in building lasting relationships with our clients through trust, transparency, and unparalleled service. Your financial success is our priority, and we are here to guide you every step of the way.
          </p>
          <div>
            <Link 
              to="/learn-more" 
              className='bg-customGreenDarker py-[8px] px-[20px] sm:py-[10px] sm:px-[25px] lg:py-[12px] lg:px-[30px] rounded-[4px] inline-block font-roboto text-[14px] sm:text-[16px] lg:text-[18px]'
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
