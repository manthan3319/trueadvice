import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { bg1 } from '../../Images/Images';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export const Home_Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slidesData = [
        {
            id: 1,
            title: "Financity",
            description: "We help you manage assets, provide financial advice. Leave money issues with us and focus on your core business.",
            link1: "Learn More",
            link2: "Contact Us",
            backgroundImage: bg1, 
        },
        {
            id: 2,
            title: "Financity",
            description: "We help you manage assets, provide financial advice. Leave money issues with us and focus on your core business.",
            link1: "Learn More",
            link2: "Contact Us",
            backgroundImage: bg1, 
        },
    ];

    return (
        <div className="overflow-hidden">
            <div className="overflow-hidden" style={{ position: 'relative', height: '500px' }}>
                <Slider {...settings} style={{ position: 'relative', zIndex: 2 }}>
                    {slidesData.map((slide) => (
                        <div key={slide.id}>
                            <motion.div 
                                style={{
                                    backgroundImage: `url(${slide.backgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '500px',
                                    position: 'relative',
                                    width: "100%"
                                }}
                                initial={{ scale: 1 }}
                                animate={{ scale: window.innerWidth < 768 ? 1 : 1.1 }} // Adjust scale for mobile screens
                                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: '#0c2a1edb',
                                    zIndex: 1
                                }} />
                                <div className='lg:max-w-[1440px] relative z-20 m-auto w-auto lg:px-[50px] text-white flex justify-center items-center flex-col h-full'>
                                    <motion.h3 
                                        className="font-merriweather font-bold text-center"
                                        style={{
                                            fontSize: window.innerWidth < 768 ? '40px' : '130px', // Adjust font size for mobile
                                        }}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {slide.title}
                                    </motion.h3>
                                    <motion.p 
                                        className="font-roboto text-center"
                                        style={{
                                            fontSize: window.innerWidth < 768 ? '18px' : '28px', // Adjust font size for mobile
                                            maxWidth: window.innerWidth < 768 ? '90%' : '800px', // Adjust max-width for mobile
                                        }}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        {slide.description}
                                    </motion.p>
                                    <motion.div 
                                        className="flex gap-[25px] mt-[30px] items-center"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                        style={{
                                            flexDirection: window.innerWidth < 768 ? 'column' : 'row', // Stack buttons vertically on mobile
                                            gap: window.innerWidth < 768 ? '15px' : '25px', // Adjust gap for mobile
                                        }}
                                    >
                                        <Link to="/learn-more" className="bg-white text-black xl:text-[19px] font-roboto px-[20px] py-[7px] rounded-[5px] hover:bg-customGreenDark hover:text-white">
                                            {slide.link1}
                                        </Link>
                                        <Link to="/contact-us" className="bg-white text-black xl:text-[19px] font-roboto px-[20px] py-[7px] rounded-[5px] hover:bg-customGreenDark hover:text-white">
                                            {slide.link2}
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
