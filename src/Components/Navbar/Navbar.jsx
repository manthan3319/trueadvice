import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

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
      id: 4,
      name: "Clients",
      link: "/clients"
    },
    {
      id: 5,
      name: "News",
      link: "/news"
    },
    {
      id: 6,
      name: "Faq",
      link: "/faq"
    },
  ];

  return (
    <div className='bg-customGreenDark py-[10px] navbar relative  z-[9999]'>
      <div className='lg:max-w-[1440px] m-auto w-auto lg:px-[50px]'>
        <div className='flex justify-between items-center'>
          <div>
            <Link to="/" className='text-customGreenDark font-roboto text-[25px]'><h1>Logo</h1></Link>
          </div>
          
          <div>
            <nav>
              <ul className='flex gap-[45px]'>
                {NavbarMenu.map(item => (
                  <li key={item.id} className='text-white text-[17px] font-roboto'>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
              <Link className='inline-block bg-white p-[10px] font-merriweather font-bold rounded-tl-[25px] rounded-br-[25px] text-customGreenDarker'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
