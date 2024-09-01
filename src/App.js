import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Services } from './Components/Services/Services';
import { Footer } from './Components/Footer/Footer';
import { Aboutus } from './Components/Aboutus/Aboutus';
import { Faq } from './Components/Faq/Faq';
import { Whatshappicon } from './Components/Functions/Functions';
import { ContactUs } from './Components/ContactUs/ContactUs';
export const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} >
        </Route>
      </Routes>
      <Footer/>
      <Whatshappicon/>
    </BrowserRouter>
  )
}
