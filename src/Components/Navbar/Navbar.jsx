import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { logo, menu } from '../../Images/Images';


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
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

  return (
    <div>
      <div className='bg-customGreenDark py-[10px] navbar relative  z-[9999] md:block hidden'>
        <div className='lg:max-w-[1440px] m-auto w-auto lg:px-[50px]'>
          <div className='flex justify-between items-center'>
            <div>
              <Link to="/" className='text-customGreenDark font-roboto text-[25px]'><img src={logo} alt='logo' className='w-[150px]'/></Link>
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
              <Link to="contactus" className='inline-block bg-white p-[10px] font-merriweather font-bold rounded-tl-[25px] rounded-br-[25px] text-customGreenDarker'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='block md:hidden'>
        <div className='flex px-[20px] justify-between fixed bg-white z-[9999999] w-[100%] py-[15px] border-b-[1px] border-black items-center'>
          <div>
            <Link to="/" className='text-customGreenDark font-roboto text-[25px]'><img src={logo} alt="logo" className='w-[180px]'/></Link>
          </div>

          <div>
            <button onClick={toggleDrawer}><img src={menu} alt='menu' className='w-[40px]' /></button>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
        >
          <div className='px-[20px]'>
            <div>
              <nav>
                <ul className='flex flex-col gap-[20px] pt-[110px] '>
                  {NavbarMenu.map(item => (
                    <li key={item.id} className='text-black text-[17px] font-roboto'>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='mt-[25px]'>
              <Link to="contactus" className='inline-block bg-customGreenDarker p-[10px] font-merriweather font-bold rounded-tl-[25px] rounded-br-[25px] text-white'>Contact Us</Link>
            </div>
            </div>
        </Drawer>
      </div>
    </div>
  );
};
