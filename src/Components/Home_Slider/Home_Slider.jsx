import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { bg1 } from '../../Images/Images';
import { Link } from "react-router-dom";

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
        {
            id: 3,
            title: "Financity",
            description: "We help you manage assets, provide financial advice. Leave money issues with us and focus on your core business.",
            link1: "Learn More",
            link2: "Contact Us",
            backgroundImage: bg1,
        },
        {
            id: 4,
            title: "Financity",
            description: "We help you manage assets, provide financial advice. Leave money issues with us and focus on your core business.",
            link1: "Learn More",
            link2: "Contact Us",
            backgroundImage: bg1,
        },
    ];

    return (
        <div className="overflow-hidden ">
            <div style={{ position: 'relative', height: '500px' }}>

                <Slider {...settings} style={{ position: 'relative', zIndex: 2 }}>
                    {slidesData.map((slide) => (
                        <div key={slide.id}>
                            <div style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '500px',
                                position: 'relative'
                            }}>
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
                                    <h3 className="xl:text-[130px] font-merriweather font-bold text-center">{slide.title}</h3>
                                    <p className="text-[28px] font-roboto xl:max-w-[800px] text-center">{slide.description}</p>
                                    <div className="flex gap-[25px] mt-[30px] items-center">
                                        <Link to="/learn-more" className="bg-white text-black xl:text-[19px] font-roboto px-[20px] py-[7px] rounded-[5px] hover:bg-customGreenDark hover:text-white">
                                            {slide.link1}
                                        </Link>
                                        <Link to="/contact-us" className="bg-white text-black xl:text-[19px] font-roboto px-[20px] py-[7px] rounded-[5px] hover:bg-customGreenDark hover:text-white">
                                            {slide.link2}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
