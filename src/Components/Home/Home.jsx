import React from 'react'
import { Home_Slider } from '../Home_Slider/Home_Slider'
import { Home_Services } from '../Home_Services/Home_Services'
import { Home_Aboutus } from '../Home_Aboutus/Home_Aboutus'
import { Home_Faq } from '../Home_Faq/Home_Faq'
import { Home_Contactus } from '../Home_Contactus/Home_Contactus'

export const Home = () => {
  return (
    <div>
      <Home_Slider/>
      <Home_Services/>
      <Home_Aboutus/>
      <Home_Contactus/>
     
    </div>
  )
}
