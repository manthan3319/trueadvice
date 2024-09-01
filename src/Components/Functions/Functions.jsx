import React from 'react';

export const Title = ({ title, imageSrc, textColor = 'white' }) => {
    return (
        <div>
            <h1 className='xl:text-[60px] font-merriweather text-center text-[34px] font-bold relative title z-[999]' style={{ color: textColor }}>
                {title}
                <span className='absolute xl:left-[42%] top-[-14px] opacity-[0.2] z-[1]'>
                    <img src={imageSrc} alt='img' className='w-[342px] h-[104px]' />
                </span>
            </h1>
        </div>
    );
};


export const Whatshappicon = () =>{
    return(
        <div class="flex flex-col items-center justify-center fixed bottom-[10px] right-[15px] z-[999999]"><div class="contact_icon "><i class="fa fa-whatsapp" aria-hidden="true"></i></div><p class="text-center text-white contact_on">Connect on <br></br> Whatsapp</p></div>
    )
} 

